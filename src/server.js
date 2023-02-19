//const express = require("express");
import express from "express"
import configViewEngine from "./configs/viewEngine";
require('dotenv').config();
const app = express();
const port = process.env.port || 3000;
const path = require('path')
configViewEngine(app)
app.get("/", (req, res) => {
	res.render("index.ejs");
});
app.get("/about", (req, res) => {
	res.send(`listen to ${port}`)
});

app.listen(port, () => {
	console.log(`Cang app Example app listening on port ${port}`);
});
