const express = require("express");
const app = express();
const port = 8080;
const path = require('path')
app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname,"../index.html"));
});
app.get("/about", (req, res) => {
	res.send("about page");
});

app.listen(port, () => {
	console.log(`Cang app Example app listening on port ${port}`);
});
