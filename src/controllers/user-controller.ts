import { userModel } from '../models/user-model';
import { Request, Response } from 'express';

export const addUser = async (req: Request, res: Response) => {
    try {
        const user = new userModel(req.body);
        await user.save();
        return res.send('User info saved')
    } catch (err) {
        return res.send(err);
    }
}

export const userList = async (req: Request, res: Response) => {
    try {
        const users = await userModel.find({});
        return res.send("Fetch All Users");
    } catch (err) {
        return res.send(err);
    }
}

export const deleteProfile = async (req: Request, res: Response) => {
    try {
        const users = await userModel.deleteOne({ id: req.body.id });
        if (users) {
            return res.send("User profile deleted");
        }
    } catch (err) {
        return res.send(err);
    }
}


export const updateProfile = async (req: Request, res: Response) => {
    try {
        const users = await userModel.findOneAndUpdate({
            _id: req.body.id
        }, {
            $set: {
                firstName: req.body.firstName, lastName: req.body.lastName,
                userName: req.body.userName, password: req.body.password, email: req.body.email, contact: req.body.contact
            }
        })

        if (users) {
            return res.send("User profile updated");
        }
    } catch (err) {
        return res.send(err);
    }
}
