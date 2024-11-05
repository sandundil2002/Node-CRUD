const express = require("express");
const db = require('./db'); // Import the database connection
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.use(express.json()); // to handle JSON data

// Basic routes for the API
app.get("/api", (req, res) => {
    res.send("Hello World!");
})

// Get all items
app.get('/api/items', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM items');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching items' });
  }
});

// Add a new item
app.post("/api/items", async (req, res) => {
  const { name, price } = req.body;
  try {
    const [result] = await db.query(
      "INSERT INTO items (name, price) VALUES (?, ?)",
      [name, price]
    );
    res.status(201).json({ message: "Item created", itemId: result.insertId });
  } catch (error) {
    console.error("Error in SQL query:", error); // Log the exact error
    res.status(500).json({ error: "Error creating item" });
  }
});