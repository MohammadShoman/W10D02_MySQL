const db = require("./db");

const addNewBook = (req, res) => {
  console.log("addNewBook");
  const { title, author, published_at, price } = req.body;
  const query = `INSERT INTO books (title,author,published_ar,price) VALUES (?,?,?,?);`;
  const array = [title, author, published_at, price];
  console.log("hhhhhhhhhhh", title, author, published_at, price);
  db.query(query, array, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.json(result);
  });
};

const getAllBooks = (req, res) => {
  const query = `SELECT * FROM books;`;
  db.query(query, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.json(result);
  });
};

const updateBookById = (req, res) => {
  const { title, author, published_at, price } = req.body;
  const id = req.params.id;
  const query = `UPDATE books
SET title=?,author=?,published_at=?,price=?
WHERE id=${id};`;
  const array = [title, author, published_at, price];
  db.query(query, array, (err, result) => {
    if (err) throw err;

    res.json(result);
  });
};

const deleteBookById = (req, res) => {
  const id = req.params.id;
  const query = `DELETE FROM books
  WHERE id=${id};`;

  db.query(query, (err, result) => {
    if (err) throw err;
    console.log(err);
    res.json(result);
  });
};

const orderBy = (req, res) => {
  const query = `SELECT * FROM books ORDER BY price DESC ;`;
  db.query(query, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

const getBooksPriceNull = (req, res) => {
  const query = `SELECT * FROM books
  WHERE price IS NULL;`;
  db.query(query, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

const getBooksPriceNotNull=(req,res)=>{
  const query = `SELECT * FROM books
  WHERE price IS NOT NULL;`;
  db.query(query, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
}

module.exports = {
  addNewBook,
  getAllBooks,
  updateBookById,
  deleteBookById,
  orderBy,
  getBooksPriceNull,
  getBooksPriceNotNull
};
