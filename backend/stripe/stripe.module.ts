import { Module } from '@nestjs/common';
import { StripeController } from './stripe.controller';
import { StripeService } from './stripe.service';
import { CheckoutController } from './checkout.controller';
import { AppModule } from '../src/app.module'; // Importez AppModule
import { PrintfulModule } from '../src/prinfutl/prinfutl.module';


@Module({
    imports: [AppModule, PrintfulModule], 
    controllers: [StripeController, CheckoutController], // Déclare les contrôleurs Stripe
  providers: [StripeService], // Déclare les services Stripe
})
export class StripeModule {}
