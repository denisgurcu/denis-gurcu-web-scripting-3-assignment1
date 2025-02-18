const express = require("express"); // importing the express module
const app = express(); // creating new express app
const path = require("path"); // loading path module to handle file paths correctly across different systems
const booksRouter = require("./routes/books"); // importing the books router
const PORT = 3000; // setting the port for the server we'll use this below


app.set("json spaces", 2); // enable pretty-print JSON automatically (optional - just to see it better)

// middleware to parse JSON request bodies (so we can handle post/put data)
app.use(express.json());

// middleware for the images from the public folder to appear, e.g. /public/brave_new_world.jpg
app.use("/public", express.static(path.join(__dirname, "public")));

// the books router (so when we go http://localhost:3000/books it should show out list)
app.use("/books", booksRouter);

// I added this to handle the root route (http://localhost:3000/) so it isn't just empty/error page
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to the Dystopian Reading List API!", // welcome message
        "instructions": "Use the following endpoints (Note: Changes on the app appear automatically if running 'npx nodemon app.js', nodemon installed locally):", //guide for the users, also explanation how to run, I installed nodemon locally not to kill server every time I make changes
        endpoints: { // list of available endpoints
            getAllBooks: "/books",
            getBookById: "/books/:id",
            addBook: "/books (POST)",
            updateBook: "/books/:id (PUT)",
            deleteBook: "/books/:id (DELETE)"
        }
    });
});

// this is to handle 404 errors (if someone tries an unknown route, show this)
app.use((req, res) => {
    res.status(404).json({ error: "Oops you are trying something I haven't added or maybe even learned yet! 🥸" });
});

// this is to actually start the server using the port 3000 we defined above so we can access it in the browser

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`); // Log that it's running
});
