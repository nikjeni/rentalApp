import express from 'express';
import { json } from 'body-parser';

import mongoose from 'mongoose';

import { itemRoutes } from './routes/item-routes';
import { userRoutes } from './routes/user-route';
const app = express();

app.use(json());
app.use('/item', itemRoutes);
app.use('/user', userRoutes);
mongoose.connect('mongodb://localhost:27017/rentDb', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => console.log('Connected to DB'));

app.listen(3000, () => {
    console.log('Server started at port 3000');
})

