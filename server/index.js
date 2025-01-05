import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bookModel from '../server/models/users.js';
import { ObjectId } from 'mongodb';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();  // Configure dotenv to load the .env file

const app = express()
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));


// connect to database
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log('Connected to db & Server is running', process.env.PORT)
    })
})
.catch((error) => {
    console.log(error)
})


// routes
app.get('/books', (req, res) => {

    // Helpful API Pagination 
    // Create a query parameter for pagination
    const page = req.query.p || 0
 
    const booksPerPage = 3

    bookModel.find() 
    .sort({ author: 1 })
    .skip(page * booksPerPage)
    .limit(booksPerPage)
    .then(books => res.json(books))
    .catch(() => {
        res.status(500).json({error: 'Could not fectch the documents'})
    })
})



//////////////////////////
// FINDING SINGLE DOCUMENTS 
//////////////////////////
app.get('/books/:id', (req, res) => {

    // If the id string is valid then execute the filtering
    if (ObjectId.isValid(req.params.id)) {

    // req.params.id allows access to what is within the URL
    bookModel.findOne({_id: new ObjectId(req.params.id)}) // find doc associated with ID
    .then(doc => {
        res.status(200).json(doc)
    })
    .catch(() => {
        res.status(500).json({error: 'Could not fetch the documents1'})
    })
    } else {
        res.status(500).json({error: 'Not valid ID'})
    }
})


app.post('/books', (req, res) => {
    
    const book = req.body
    

    bookModel.create(book)
    .then(result => {
        res.status(201).json(result)
    })
    .catch(() => {
        res.status(500).json({err: 'Could not create new document'})
    })
})



app.delete('/books/:id', (req, res) => {
    // Find the ID of the book and execute a delete function from databse
    
    if (ObjectId.isValid(req.params.id)) {

        // if ID valid then delete the id 
        bookModel.deleteOne({_id: new ObjectId(req.params.id)}) 
        .then(result => {
            res.status(200).json(result)
        })
        .catch(() => {
            res.status(500).json({error: 'Could not delete the document'})
        })
        } else {
            res.status(500).json({error: 'Not valid ID'})
        }
})


// Helps modify any books in the database
app.patch('/books/:id', (req, res) => {

    // Will be an object with various fields that we want to update
    const updates = req.body

    if (ObjectId.isValid(req.params.id)) {

        // Two arguments that will find the book and other to set the update
        bookModel.updateOne({_id: new ObjectId(req.params.id)}, {$set: updates}) 
        .then(result => {
            res.status(200).json(result)
        })
        .catch(() => {
            res.status(500).json({error: 'Could not update document'})
        })
        } else {
            res.status(500).json({error: 'Not valid ID'})
        }
})
