const express = require("express"); // import express
const router = express.Router(); // ceate a router to handle book routes

// books array 
let books = [
    { id: 1, title: "Brave New World", author: "Aldous Huxley", imageUrl: "/public/brave_new_world.jpg", year: 1932 },
    { id: 2, title: "1984", author: "George Orwell", imageUrl: "/public/1984.jpg", year: 1949 },
    { id: 3, title: "We", author: "Yevgeny Zamyatin", imageUrl: "/public/we.jpg", year: 1924 }
];

// this one get all books (returns full book list)
router.get("/", (req, res) => {
    res.json(books);
});

// this one gets book by id
router.get("/:id", (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id)); // find book by ID
    if (!book) { // if not found, return 404 error
        return res.status(404).json({ error: "Uh-Oh! That book is not here yet! 🔍" });
    }
    res.json(book); // if found, return the book
});

// this is to add a new book 
router.post("/", (req, res) => {
    const { title, author, imageUrl, year } = req.body; // extract book data from request body

    if (!title || !author || !imageUrl || !year) { // validate input (all fields required)
        return res.status(400).json({ error: "All fields are required" });
    }

    const newBook = { // create a new book object
        id: books.length + 1, // generate a new ID by adding +1 to the current length
        title,
        author,
        imageUrl,
        year
    };

    books.push(newBook); // add  the book to the array
    res.status(201).json({ 
        message: "Success! You added a new book. You are a bookworm now! 🐛",
        book: newBook 
    }); // return success message and the new book
});

// this is to update a book by it's ID so when we open it with by adding the id to the url on postman, we can update
router.put("/:id", (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id)); // find book by ID
    if (!book) { // if book not found, return 404
        return res.status(404).json({ error: "That book doesn't even exist to begin with! 📖 Choose another ID." });
    }

    const { title, author, imageUrl, year } = req.body; // Get updated data

    if (title) book.title = title; // Update title if provided
    if (author) book.author = author; // Update author if provided
    if (imageUrl) book.imageUrl = imageUrl; // Update image URL if provided
    if (year) book.year = year; // Update year if provided

    res.json({ 
        message: "Good job! You updated a book! 🥰",
        book 
    }); // Return success message and updated book
});

// this one deletes a book by it's ID
router.delete("/:id", (req, res) => {
    const bookIndex = books.findIndex(b => b.id === parseInt(req.params.id)); // find book by ID
    if (bookIndex === -1) { // if not found, return 404
        return res.status(404).json({ error: "That book is not even here yet! 🥹 Maybe try a different ID?" });
    }

    books.splice(bookIndex, 1); // remove the book from the array
    res.json({ message: "You deleted a book instead of reading it! 😭" }); // confirm message
});

module.exports = router; // export the router so it can be used in app.js
