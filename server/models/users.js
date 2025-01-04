import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    pages: Number,
    rating: Number,
    genres: Array,
    review: Array,
    name: String
    // email: String,
    // age: Number
})

const bookModel = mongoose.model('books', bookSchema)
export default bookModel;