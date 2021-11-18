# Book Directory

> Book Directory is a REST API created with Node.js that allows you to fetch all the books from the directory, add books to the directory, delete books from the directory.

## Built With

- Node.js
- Express

## Live Demo

[Live Demo Link](https://livedemo.com)


## Getting Started

To get a local copy up and running follow these simple example steps.

run on your console `git clone https://github.com/petudeveloper/book-directory.git`


### Install
- Install project packages  `npm install` or `npm i`

### Usage
- To start a local server `npm start`
- Access `http://localhost:3000/` in your browser

#### Endpoints
- GET `/api/books` to see all the books on the directory.
- GET `/api/books/:id` to see a specific book from the directory by its id.
- DELETE  `/api/books/:id` to remove a specific book from the directory by its id.
- POST `/api/books` to add a new book to the directory **NOTE:** You need to pass a body with a title and author. **Content-Type: application/json**.

## Authors

👤 **David Alvarez**

- GitHub: [@petudeveloper](https://github.com/petudeveloper)
- Twitter: [@petudeveloper](https://twitter.com/petudeveloper)
- LinkedIn: [davidalvarezmazzo](https://www.linkedin.com/in/davidalvarezmazzo/)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc

## 📝 License

This project is [MIT](./MIT.md) licensed.
