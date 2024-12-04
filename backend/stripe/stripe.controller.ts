import { Controller, Post, Body, Req } from '@nestjs/common';
import { Request } from 'express';
import Stripe from 'stripe';
import { StripeService } from './stripe.service';
import { PrintfulService } from '../src/prinfutl/printful.service'; // Importez le service Printful

interface CustomSession extends Stripe.Checkout.Session {
  shipping?: {
    address: {
      line1: string;
      line2?: string;
      city: string;
      state?: string;
      country: string;
      postal_code: string;
    };
  };
}

@Controller('stripe')
export class StripeController {
  private readonly stripe: Stripe;

  constructor(
    private readonly stripeService: StripeService,
    private readonly printfulService: PrintfulService, // Injectez le service Printful
  ) {
    this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    });
  }

  @Post('create-checkout-session')
  async createCheckoutSession(@Body() product: any) {
    return this.stripeService.createCheckoutSession(product);
  }

  @Post('webhook')
  async handleWebhook(@Req() request: Request) {
    const sig = request.headers['stripe-signature'];

    try {
      const event = this.stripe.webhooks.constructEvent(
        request.body,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET,
      );

      if (event.type === 'checkout.session.completed') {
        const session = event.data.object as CustomSession;

        const shippingAddress = session.shipping?.address;
        if (!shippingAddress) {
          console.error('Les informations d\'expédition sont manquantes.');
          return;
        }

        console.log('Adresse d\'expédition :', shippingAddress);

        const orderDetails = {
          recipient: {
            name: session.customer_details?.name || 'Nom inconnu',
            address1: shippingAddress.line1,
            address2: shippingAddress.line2 || '',
            city: shippingAddress.city,
            state_code: shippingAddress.state || '',
            country_code: shippingAddress.country,
            zip: shippingAddress.postal_code,
          },
          items: [
            {
              sync_variant_id: session.metadata?.sync_variant_id,
              quantity: 1,
            },
          ],
        };

        try {
          const order = await this.printfulService.createOrder(orderDetails);
          console.log('Commande Printful créée :', order);
        } catch (error) {
          console.error('Erreur lors de la création de la commande Printful :', error);
        }
      }

      return { received: true };
    } catch (err) {
      console.error(`Erreur webhook : ${err.message}`);
      return { error: 'Webhook Error' };
    }
  }
}
