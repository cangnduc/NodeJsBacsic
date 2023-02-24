//const express = require("express");
import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoute from "./route/web";
import initApiRoute from "./route/api"
require("dotenv").config();
const app = express();
const port = process.env.port || 3000;
const path = require("path");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set up view engine
configViewEngine(app);
// init web route
initWebRoute(app);
initApiRoute(app);
app.listen(port, () => {
	console.log(`Cang app Example app listening on port ${port}`);
});
//
