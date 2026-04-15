import User from "../models/userModel.js";
import tkn from "jsonwebtoken";
import { Request, Response } from "express";

// Use _id as its the same as mongo db
const createToken = (_id: string): string => {
  const secret = process.env.SECRET;
  if (!secret) {
    throw new Error("Missing SECRET environment variable");
  }

  return tkn.sign({ _id }, secret, { expiresIn: "1d" });
};

// login user
const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    // create a token for user and send to browser
    // Use the token generator to then pass in our user Object that is saved above
    const token = createToken(user._id.toString());

    // passing the token back to server
    res.status(200).json({ name: user.name, email, token });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    res.status(400).json({ error: message });
  }
};

// signup user
const signupUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.signup(name, email, password);

    // create a token for user and send to browser
    // Use the token generator to then pass in our user Object that is saved above
    const token = createToken(user._id.toString());

    // passing the token back to browser/client
    res.status(200).json({ name, email, token });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    res.status(400).json({ error: message });
  }
};

export default { loginUser, signupUser };
