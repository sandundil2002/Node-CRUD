const express = require("express");
const db = require('./db'); // Import the database connection
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.use(express.json()); // to handle JSON data

// Basic routes for the API
app.get("", (req, res) => {
    res.send("Hello World!");
})

app.get("/api/items", (req, res) => {
  res.json({ message: "List of items" });
});

app.post("/api/items", (req, res) => {
  const newItem = req.body;
  // Add the item to the database (for now, just simulate it)
  res.status(201).json({ message: "Item created", item: newItem });
});

app.get("/api/items/:id", (req, res) => {
  const itemId = req.params.id;
  // Fetch the item by ID (simulating for now)
  res.json({ message: `Details of item ${itemId}` });
});

app.put("/api/items/:id", (req, res) => {
  const itemId = req.params.id;
  const updatedItem = req.body;
  // Update the item (simulated)
  res.json({ message: `Item ${itemId} updated`, item: updatedItem });
});

app.delete("/api/items/:id", (req, res) => {
  const itemId = req.params.id;
  // Delete the item (simulated)
  res.json({ message: `Item ${itemId} deleted` });
});