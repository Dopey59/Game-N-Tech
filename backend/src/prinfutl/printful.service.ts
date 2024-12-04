import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class PrintfulService {
  private readonly apiBaseUrl = 'https://api.printful.com'; // Base URL de l'API Printful

  constructor(private readonly httpService: HttpService) {}

  async createOrder(orderDetails: any): Promise<any> {
    const endpoint = `${this.apiBaseUrl}/orders`;

    try {
      const response = await firstValueFrom(
        this.httpService.post(endpoint, orderDetails, {
          headers: {
            Authorization: `Bearer ${process.env.PRINTFUL_API_KEY}`,
          },
        }),
      );

      return response.data;
    } catch (error) {
      console.error('Erreur lors de la création de la commande Printful :', error.response?.data || error.message);
      throw new Error(
        `Impossible de créer la commande Printful : ${error.response?.data?.error || error.message}`,
      );
    }
  }

  async getProducts(): Promise<any> {
    const endpoint = `${this.apiBaseUrl}/store/products`;

    try {
      const response = await firstValueFrom(
        this.httpService.get(endpoint, {
          headers: {
            Authorization: `Bearer ${process.env.PRINTFUL_API_KEY}`,
          },
        }),
      );
      
      // Log pour vérifier la réponse
      console.log('Products fetched from Printful:', response.data);
      
      return response.data.result; // Assurez-vous que "result" contient la liste des produits
    } catch (error) {
      console.error('Error fetching products:', error.response?.data || error.message);
      throw new Error(
        `Failed to fetch products: ${error.response?.data?.error || error.message}`,
      );
    }
  }
  

  // Récupérer les détails d'un produit
  async getProductDetails(productId: string): Promise<any> {
    const endpoint = `${this.apiBaseUrl}/store/products/${productId}`;

    try {
      const response = await firstValueFrom(
        this.httpService.get(endpoint, {
          headers: {
            Authorization: `Bearer ${process.env.PRINTFUL_API_KEY}`,
          },
        }),
      );

      return response.data;
    } catch (error) {
      throw new Error(
        `Failed to fetch product details: ${error.response?.data?.error || error.message}`,
      );
    }
  }

  // Récupérer les méthodes de livraison
  async getShippingMethods(): Promise<any> {
    const endpoint = `${this.apiBaseUrl}/shipping/rates`;

    try {
      const response = await firstValueFrom(
        this.httpService.get(endpoint, {
          headers: {
            Authorization: `Bearer ${process.env.PRINTFUL_API_KEY}`,
          },
        }),
      );

      return response.data;
    } catch (error) {
      throw new Error(
        `Failed to fetch shipping methods: ${error.response?.data?.error || error.message}`,
      );
    }
  }
}