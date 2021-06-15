const db = require("./db");

const addNewBook = (req, res) => {
    console.log("addNewBook")
  const { titel, author, published_ar, price } = req.body;
  const query = `INSERT INTO books (titel,author,published_ar,price) VALUES (?,?,?,?);`;
  const array = [titel, author, published_ar, price];
  console.log("hhhhhhhhhhh",titel, author, published_ar, price)
  db.query(query, array, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.json(result);
  });
};

const getAllBooks=(req,res)=>{
    const query=`SELECT * FROM BOOKS`
    db.query(query,(err, result)=>{
        if (err) throw err;
    console.log(result);
    res.json(result);
    })
}
module.exports = {
  addNewBook,
  getAllBooks
};
