//communicator
const axios = require('axios');

class communicator {
  constructor() {
    this.userServiceClient = axios.create({ baseURL: 'http://localhost:3001/api' });
    this.productServiceClient = axios.create({ baseURL: 'http://localhost:3002/api' });
    this.orderServiceClient = axios.create({ baseURL: 'http://localhost:3003/api' });
  }

  async getUsers() {
    try {
      const response = await this.userServiceClient.get('/users');
      return response.data.users;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error; // Re-throw the error to be handled by the caller
    }
  }

  async getProducts() {
    try {
      const response = await this.productServiceClient.get('/products');
      return response.data.products;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  }

  async getOrders() {
    try {
      const response = await this.orderServiceClient.get('/orders');
      return response.data.orders;
    } catch (error) {
      console.error('Error fetching orders:', error);
      throw error;
    }
  }
}

module.exports = new communicator();