import mongoose, { Schema } from 'mongoose';

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    price: {
        type: Number,
    },
    manufacture_date: {
        type: Date,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

const Item = mongoose.model('Item', itemSchema);

export { Item as ItemModel }