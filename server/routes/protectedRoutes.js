import express from 'express';
import requireAuth from '../middleware/requireAuth.js';
import { getProtectedData } from '../controllers/protectedController.js';

const router = express.Router();

// Apply the requireAuth middleware to the protected route
router.get('/comp', requireAuth, getProtectedData);

export default router;