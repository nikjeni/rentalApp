import mongoose, { Schema } from 'mongoose';

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    userName: {
        type: String,
    },
    password: {
        type: String,
    },
    contact: {
        type: Number,
    },
    email: {
        type: String,
    },
})

const User = mongoose.model('User', userSchema);

export { User as userModel };