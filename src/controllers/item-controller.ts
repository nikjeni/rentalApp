import { ItemModel } from '../models/items-model';
import { Request, Response } from 'express';

export const addItem = async (req: Request, res: Response) => {
    try {
        const item = new ItemModel(req.body);
        const result = await item.save();
        if (result) {
            return res.send('Added item');
        }
    } catch (err) {
        return res.send(err);
    }

}


export const getItems = async (req: Request, res: Response) => {
    try {
        const item = await ItemModel.find({});
        if (item) {
            return res.send(item);
        }
    } catch (err) {
        return res.send(err);
    }

}


export const deleteItem = async (req: Request, res: Response) => {
    try {
        const item = await ItemModel.deleteOne({ _id: req.body.id });
        if (item) {
            return res.send('Item is deleted');
        }
    } catch (err) {
        return res.send(err);
    }

}


export const updateItem = async (req: Request, res: Response) => {
    try {
        const item = await ItemModel.findOneAndUpdate({ _id: req.body.id },
            { $set: { name: req.body.name, price: req.body.price, manufacture_date: req.body.manufacture_date } });
        const result = await item.save();
        if (result) {
            return res.send('Added item');
        }
    } catch (err) {
        return res.send(err);
    }

}