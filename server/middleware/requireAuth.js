import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

const requireAuth = async (req, res, next) => {
    
    // verify authentication
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({ error: 'Auth token required' });
    }

    // get the token that is needed if value is found
    const token = authorization.split(' ')[1];

    // It will verify token and return token payload
    try {
        const { _id } = jwt.verify(token, process.env.SECRET);

        // Will return just the user that matches id property and not the email or password
        req.user = await User.findOne({ _id }).select('_id');

        // Will go to next function to show user is authenticated
        next();
        
    } catch (error) {
        console.log(error);
        res.status(401).json({ error: 'Request is not authorized' });
    }
};

export default requireAuth;