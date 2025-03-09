const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
    user_id: { type: Number, required: true },
  product_id: { type: Number, required: true },
});
module.exports = mongoose.model('Order', orderSchema);