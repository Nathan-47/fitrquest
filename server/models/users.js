import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
})

const bookModel = mongoose.model('books', bookSchema)
export default bookModel;