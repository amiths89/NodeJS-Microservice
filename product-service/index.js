//product-service
const express = require('express');
const app =  express();
const PORT = process.env.PORT||3002;
const Product = require('./product.model');
const connectDB = require('./db');

connectDB();
app.use(express.json());
app.post('/api/products',async (req,res)=>
{
  try{
  const { product_id , name} = req.body;
  const product = new Product({ product_id, name});
  await product.save();
  res.status(201).json({ message: 'Product created successfully', product });
    } catch (error) {
        console.error('Error creating order:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

app.get('/api/products', async (req, res) => {
    const products = await Product.find();
    res.json({ products:products });
  });
  
  app.listen(PORT, () => {
    console.log(`Product Service is running on port ${PORT}`);
  });