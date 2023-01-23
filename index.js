const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/users/:name', (req, res) => {
  res.send(`User name is ${req.params.name}`);
});

function getRandomBook() {
  const books = ['The Alchemist', 'The Monk Who Sold His Ferrari', 'The Secret'];
  return books[Math.floor(Math.random() * books.length)];
}

app.route('/book')
  .get((req, res) => {
    res.send(getRandomBook());
  })
  .post((req, res) => {
    res.send('Add a book');
  })
  .put((req, res) => {
    res.send('Update the book');
  });


app.listen(process.env.PORT || 3500, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT || 3500}`);
});