import mongoose, { Schema, Model, Document } from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";

interface IUser {
  name: string;
  email: string;
  password: string;
}

interface IUserDocument extends IUser, Document {
  _id: mongoose.Types.ObjectId;
}

interface IUserModel extends Model<IUserDocument> {
  signup(name: string, email: string, password: string): Promise<IUserDocument>;
  login(email: string, password: string): Promise<IUserDocument>;
}

const userSchema = new Schema<IUserDocument, IUserModel>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Sign up static method
// create a method that we can call to signup new user for database
userSchema.statics.signup = async function (
  name: string,
  email: string,
  password: string
): Promise<IUserDocument> {
  if (!name || !email || !password) {
    throw Error("All fields must be filled");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email is invalid");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Password is weak");
  }

  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email already in use");
  }

  const modifyPass = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, modifyPass);

  const user = await this.create({ name, email, password: hash });

  return user;
};

// static login method
userSchema.statics.login = async function (
  email: string,
  password: string
): Promise<IUserDocument> {
  if (!email || !password) {
    throw Error("All fields must be filled");
  }

  const user = await this.findOne({ email });
  if (!user) {
    throw Error("Incorrect email");
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error("Incorrect password");
  }

  return user;
};

const userModel = mongoose.model<IUserDocument, IUserModel>("User", userSchema);
export default userModel;
