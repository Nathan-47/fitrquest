import { Response } from 'express';
import { AuthRequest } from '../middleware/requireAuth.js';

export const getProtectedData = (req: AuthRequest, res: Response): void => {
  // Example protected data
  const protectedData = {
    message: 'This is protected data',
    user: req.user,
  };

  res.status(200).json(protectedData);
};