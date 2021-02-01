import express from 'express';
import { addItem, deleteItem, getItems, updateItem } from '../controllers/item-controller';
const router = express.Router();

router.get('/userlist', addItem);
router.post('/deleteUser', deleteItem);
router.post('/updateProfile', getItems);
router.post('/addUser', updateItem);

export { router as itemRoutes }
