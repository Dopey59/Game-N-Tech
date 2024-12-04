import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000';

const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000',
  });
  
  export const fetchProducts = async () => {
    const response = await api.get('/printful/products');
    return response.data;
  };

  export const fetchProductDetails = async (id) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/printful/products/${id}`);
      return response.data.result; // Assurez-vous de retourner "result"
    } catch (error) {
      console.error('Failed to fetch product details:', error);
      throw error;
    }
  };
  
  
  
  export const fetchShippingMethods = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/printful/shipping/methods`);
      return response.data.result;
    } catch (error) {
      console.error('Failed to fetch shipping methods:', error);
      throw error;
    }
  };

  export const createCheckoutSession = async (product) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/stripe/create-checkout-session`, product);
      return response.data;
    } catch (error) {
      console.error('Failed to create checkout session:', error);
      throw error;
    }
  };
  
