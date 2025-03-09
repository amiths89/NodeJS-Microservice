const mongoose = require('mongoose');

async function connectDB() {
    try {
      await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/ordersDB', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('MongoDB connected');
    } catch (error) {
      console.error('MongoDB connection error:', error);
      process.exit(1); // Exit the process if connection fails
    }
  }
  
  module.exports = connectDB;