import mongoose from 'mongoose';
const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true}, // Pro Smartphone X12
    category: { type: String, required: true}, // Smartphones
    price: { type: Number, required: true}, // Rs.50000.00
    stock: { type: Number, required: true}, // Amount
    image: { type: String}, // Images
    description: { type: String},
},
{ timestamps: true});
export default mongoose.models.Product || mongoose.model('Product, ProductSchema');