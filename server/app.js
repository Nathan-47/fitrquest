import express from 'express';  // Use 'import' instead of 'require'
const app = express();
export default app;  // Use 'export' instead of 'module.exports'


app.listen(5173, () => {
    console.log('app listening on port 5173')
})

// routes
app.get('/books', (req, res) => {
    res.json({mssg: "welcome to the api"})
})