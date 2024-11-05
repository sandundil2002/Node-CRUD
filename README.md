<h1>Node CRUD</h1>

<p>This repository is a full-featured CRUD API built with Node.js and MySQL. This project provides a simple and efficient way to manage items with operations to Create, Read, Update, and Delete (CRUD) item records. The backend is built with Express, and the frontend uses HTML and Bootstrap.</p>

<h3>Features</h3>

  * REST API: Fully functional CRUD API with endpoints for managing items.
  * Database: Uses MySQL to store and retrieve item data.
  * Frontend: A simple HTML form with Bootstrap for interacting with the API.
  * CORS Support: Configured to handle cross-origin requests.
  * Scalable Structure: Industry-standard project structure for easy scalability and maintenance.

<h3>Prerequisites</h3>

  * Node.js (version 14 or above)
  * MySQL (version 5.7 or above)
  * npm (usually installed with Node.js)

<h3>Getting Started</h3>

  1. Clone the Repository
     
    git clone https://github.com/sandundil2002/Node-CRUD.git
    cd inventoryhub

  2. Install Dependencies

    npm install

  3. Set Up the Database

    CREATE DATABASE node_api;
    
    CREATE TABLE items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL);

  4. Update db.js with your own mysql configurations

    const pool = mysql.createPool({
    host: "localhost", // Your MySQL server host (e.g., localhost)
    user: "", // Your MySQL username
    password: "", // Your MySQL password
    database: "node_api", // The database name you want to connect 
    });

  4. Test the API

    npm run dev

  You can test the API using Postman or similar tools. The available endpoints are:

  * GET /api/items – Retrieve all items
  * GET /api/items/:id – Retrieve an item by ID
  * POST /api/items – Create a new item
  * PUT /api/items/:id – Update an item by ID
  * DELETE /api/items/:id – Delete an item by ID

  <h3>API Documentation</h3>

  * You can view the detailed API documentation with example requests and responses <a href="https://documenter.getpostman.com/view/35384990/2sAY4yeM5P">here</a>.

  <h3>Frontend</h3>

  <p>The project includes a simple frontend form to interact with the API. To use it, open public/index.html in a web browser and try adding, updating, or deleting items.</p>





