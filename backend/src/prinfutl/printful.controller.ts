import { Controller, Get, Param } from '@nestjs/common';
import { PrintfulService } from './printful.service';

@Controller('printful')
export class PrintfulController {
  constructor(private readonly printfulService: PrintfulService) {}

   @Get('products')
  async getProducts() {
    return this.printfulService.getProducts();
  }

  // Route pour obtenir les détails d'un produit
  @Get('products/:id')
  async getProductDetails(@Param('id') id: string) {
    return this.printfulService.getProductDetails(id);
  }

//   // Route pour obtenir les méthodes de livraison
//   @Get('shipping/methods')
//   async getShippingMethods() {
//     return this.printfulService.getShippingMethods();
//   }
}
