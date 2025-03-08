"use strict";

import mongoose from "mongoose";
import bcrypt from "bcrypt";    
import validator from "validator";

const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});


// Sign up static method
// create a method that we can call to signup new user for database
userSchema.statics.signup = async function(name, email, password) {


    // user validation //
    // if no value for either then throw error
    if (!name || !email || !password) {
        throw Error('All fields must be filled')
    }

    // if email is not valid then throw error
    if (!validator.isEmail(email)) {
        throw Error('Email is invalid')
    }

    // if password is not valid then throw error
    if (!validator.isStrongPassword(password)) {
        throw Error('Password is weak')
    }
    // user validation // 


    // if email exists then will return user email if not then null
    // use "this" becuase there is no user data as this is the export file
    const exists = await this.findOne({email});

    if (exists) {
        throw Error('Email already in use')
    }

    // password hashing for encryption
    const modifyPass = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, modifyPass)

    // Take password and store it in user document
    const user = await this.create({name, email, password: hash})

    return user;
}


// static login method
userSchema.statics.login = async function(email, password) {
    if (!email || !password) {
        throw Error('All fields must be filled')
    }

    // want to find user based on email given return null if none is found
    const user = await this.findOne({email}); 

    // If user does not exist then throw error
    if (!user) {
        throw Error('Incorrect email')
    }

    // We comparing to see if the given password matches the hashed password that is stored
    const match = await bcrypt.compare(password, user.password)

    if (!match) {
        throw Error('Incorrect password')
    }

    return user;
}


const userModel = mongoose.model('User', userSchema)
export default userModel;