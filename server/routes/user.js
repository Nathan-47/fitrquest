
import express from 'express';
import userController from '../controllers/userController.js'; 

const { loginUser, signupUser } = userController;

const router = express.Router();

// Login route
router.post('/login', loginUser);

// Sign up route
router.post('/signup', signupUser);


export default router;




