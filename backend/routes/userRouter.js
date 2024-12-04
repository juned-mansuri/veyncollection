import express from 'express';
import { loginUser,registerUser,adminLogin, getUserProfile, updateUserProfile } from '../controllers/userController.js';
import authUser from '../middleware/auth.js';

const userRouter = express.Router();

userRouter.post('/register' , registerUser)
userRouter.post('/login' , loginUser)
userRouter.post('/admin' , adminLogin)
userRouter.get('/profile', authUser, getUserProfile)
userRouter.put('/update', authUser, updateUserProfile)


export default userRouter;