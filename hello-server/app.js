const express = require("express");

const app = express();
const PORT = 3000;

// Home route
app.get("/", (req, res) => {
  res.send("🏠 Welcome to Hello Server!");
});

// About route
app.get("/about", (req, res) => {
  res.send("ℹ️ This is the About Page");
});

// Contact route
app.get("/contact", (req, res) => {
  res.send("📞 Contact us at: hello@email.com");
});

// Products route
app.get("/products", (req, res) => {
  res.send("🛒 Here are our products!");
});

// 404 route (for unknown paths)
app.use((req, res) => {
  res.status(404).send("❌ Page Not Found");
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});