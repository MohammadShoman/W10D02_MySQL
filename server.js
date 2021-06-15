const express = require("express");
const app = express();

const db = require('./db')
const PORT = 3000;
const books=require('./books')
app.use(express.json());


app.get('/books',books.getAllBooks)
app.post("/books",books.addNewBook)

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});