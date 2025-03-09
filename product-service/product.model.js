const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    product_id:{type: Number,required:true},
    name:{type:String,required:true}
});
module.exports = mongoose.model('Product',productSchema);
