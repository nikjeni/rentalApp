import express from 'express';
import { addUser, deleteProfile, updateProfile, userList } from '../controllers/user-controller';
const router = express.Router();

router.get('/userlist', userList);
router.post('/deleteUser', deleteProfile);
router.post('/updateProfile', updateProfile);
router.post('/addUser', addUser);

export { router as userRoutes }
