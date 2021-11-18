const express = require('express')
const app = express()
const PORT = 3000

app.use(express.json())

let books = [
  {
    "id": 1,
    "title": "Clean Code",
    "author": "Robert C. Martin"
  }
]

// index page
app.get('/', (req, resp) => {
  resp.send("<div><h1>Welcome to Book directory</h1><p>API endpoints</p><ul><li>'/api/books': get all the books</li></ul></div>")
})

// Get all the boos
app.get('/api/books', (req, resp) => {
  resp.json(books)
})

// Get a book by id
app.get('/api/books/:id', (req, resp) => {
  const id = parseInt(req.params.id)
  const book = books.find((book) => book.id === id)
  if (book) {
    resp.json(book)
  } else {
    resp.send(404).end()
  }
})

// Delete a book by id
app.delete('/api/books/:id', (req, resp) => {
  const id = parseInt(req.params.id)
  const book = books.find((book) => book.id === id)
  books = books.filter((book) => book.id != id)
  resp.json(book)
})

// Add a new book
app.post('/api/books/', (req, resp) => {
  const body = req.body
  const id = books.length + 1
  const newBook = {
    "id": id,
    "title": body.title,
    "author": body.author
  }
  books = [...books, newBook]
  if (!body || !body.title || !body.author){
    return resp.status(404).json({
      error: "book info is missing in request body"
    })
  } else {
    resp.json(newBook)
  }
})

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`)
})