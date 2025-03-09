"use strict";

import User from "../models/userModel.js";
import tkn from 'jsonwebtoken'


// Use _id as its the same as mongo db
const createToken = (_id) => {
    return tkn.sign({_id}, process.env.SECRET, {expiresIn: '3d'})
}

// login user
const loginUser = async (req, res) => {
    const {email, password} = req.body

    try {
        const user = await User.login(email, password)

        // create a token for user and send to browser
        // Use the token generator to then pass in our user Object that is saved above
        const token = createToken(user._id)

        // passing the token back to server
        res.status(200).json({name: user.name, email, token})
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


// signup user
const signupUser = async (req, res) => {
    // retrieve email and password from JSON body
    const {name, email, password} = req.body

    try {
        const user = await User.signup(name, email, password)

        // create a token for user and send to browser
        // Use the token generator to then pass in our user Object that is saved above
        const token = createToken(user._id)

        // passing the token back to browser/client
        res.status(200).json({name, email, token})
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


export default {loginUser, signupUser};