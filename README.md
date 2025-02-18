# 📚 Dystopian Reading List API  

This is a simple **REST API** built with **Express.js** that lets you manage a collection of dystopian books. You can **view, add, update, and delete books** using API endpoints. 🚀  

---

## **📌 Features**  

- Full **CRUD functionality** (Create, Read, Update, Delete).  
- Each book has a **title, author, image URL, and publication year**.  
- The API starts with a **preset list of dystopian books** and allows expansion.  
- Book images are stored in the **public folder** and accessible via static endpoints.  

---

## **🚀 How to Run the Project**  

- **Locate the project folder:** `cd reading-list`  
- **Install dependencies:** `npm install`  
- **Start the server:** `npx nodemon app.js` (or use `node app.js` if you don’t have nodemon installed).  
- **Open the API in a browser:** `http://localhost:3000/`  

---

## **🛠 API Endpoints**  

### 📖 Get All Books  
- **URL:** `GET /books`  
- **Response:** Returns a list of books.  

### 🔍 Get a Book by ID  
- **URL:** `GET /books/:id`  
- **Response:** Returns the book with the given id.  
- **Example:** `GET /books/2`  

### ✍️ Add a New Book  
- **URL:** `POST /books`  
- **Request Body:**  
  - **title:** Book title  
  - **author:** Author’s name  
  - **imageUrl:** Path to book cover image  
  - **year:** Year of publication  
- **Response:**  
  - `"message": "Success! You added a new book. You are a bookworm now! 🐛"`  

### 📚 Update a Book  
- **URL:** `PUT /books/:id`  
- **Request Body (send only fields you want to update):**  
  - **title:** Updated book title  
  - **year:** Updated publication year  
- **Response:**  
  - `"message": "Good job! You updated a book! 🥰"`  

### 🗑️ Delete a Book  
- **URL:** `DELETE /books/:id`  
- **Response:**  
  - `"message": "You deleted a book instead of reading it! 😭"`  

---

## **🖼️ Serving Book Images**  
- Book cover images are stored in the **public folder** and can be accessed via:  
  - `http://localhost:3000/public/{image-name}.jpg`  
  - Example: `http://localhost:3000/public/1984.jpg`  

---


