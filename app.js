const express = require("express");
const app = express();
const path = require("path");
const pagesRouter = require("./routes/pages");

// Serve static files from 'public' folder
app.use(express.static(path.join(__dirname, "public")));

// Use routes
app.use("/", pagesRouter);

// Start server
const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
