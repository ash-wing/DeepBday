const express = require("express");
const router = express.Router();
const path = require("path");

// Route for black.html (Home page)
router.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "../public/html", "black.html"));
});

// Route for index.html (Second page)
router.get("/page1", (req, res) => {
	res.sendFile(path.join(__dirname, "../public/html", "index.html"));
});

// Route for index2.html (third page)
router.get("/page2", (req, res) => {
	res.sendFile(path.join(__dirname, "../public/html", "index2.html"));
});

module.exports = router;
