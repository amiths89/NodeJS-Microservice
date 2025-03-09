// order-service/index.js
const express = require('express');
const communicator = require('../communicator');
const app = express();
const PORT = process.env.PORT || 3003;
const connectDB = require('./db');
const Order = require('./order.model'); 
app.use(express.json()); // Add express.json middleware
connectDB();


app.post('/api/orders', async (req, res) => {
    try {
        const { user_id, product_id } = req.body;
        const order = new Order({ user_id, product_id });
        await order.save();
        res.status(201).json({ message: 'Order created successfully', order });
    } catch (error) {
        console.error('Error creating order:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

  app.get('/api/orders', async (req, res) => {
    try {
      // Use the local ordersData instead of communicator.getOrders()
      const orders = await Order.find();
      const products = await communicator.getProducts();
      const users = await communicator.getUsers();
  
      const detailedOrder = orders.map(order => {
        const user = users.find(user => user.id === order.user_id);
        const product = products.find(product => product.id === order.product_id);
        return { ...order.toObject(), user, product };
      });
  
      res.json({ order: detailedOrder });
    } catch (error) {
      console.error('Error fetching orders:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
    // Remove the following line:
    //res.json({ orders: [{ id: 1, user_id: 1, product_id: 1 }] });
  });

app.listen(PORT, () => {
  console.log(`Order Service is running on port ${PORT}`);
});