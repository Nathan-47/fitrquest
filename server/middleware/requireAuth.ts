import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import { Request, Response, NextFunction } from 'express';

export interface AuthRequest extends Request {
  user?: {
    _id: string;
  } | null;
}

const requireAuth = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: 'Auth token required' });
  }

  const token = authorization.split(' ')[1];
  const secret = process.env.SECRET;

  if (!secret) {
    return res.status(500).json({ error: 'Server not configured correctly' });
  }

  try {
    const payload = jwt.verify(token, secret) as { _id: string };

    if (!payload || typeof payload !== 'object' || !payload._id) {
      throw new Error('Invalid token payload');
    }

    const user = await User.findById(payload._id).select('_id');

    req.user = user ? { _id: user._id.toString() } : null;

    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: 'Request is not authorized' });
  }
};

export default requireAuth;

