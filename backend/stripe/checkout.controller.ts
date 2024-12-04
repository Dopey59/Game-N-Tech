import { Controller, Post, Body } from '@nestjs/common';
import Stripe from 'stripe';

@Controller('checkout')
export class CheckoutController {
  private stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  @Post('create-payment-intent')
  async createPaymentIntent(@Body() body: any) {
    const { cart, shippingCost } = body;

    const amount = cart.reduce((sum: number, item: { price: number; quantity: number; }) => sum + item.price * item.quantity, 0) + shippingCost;

    const paymentIntent = await this.stripe.paymentIntents.create({
      amount,
      currency: 'eur',
    });

    return { clientSecret: paymentIntent.client_secret };
  }
}