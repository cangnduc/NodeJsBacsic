//const express = require("express");
import express from "express"
import configViewEngine from "./configs/viewEngine";
import initWebRoute from './route/web'
require('dotenv').config();
const app = express();
const port = process.env.port || 3000;
const path = require('path')
// set up view engine
configViewEngine(app)
// init web route
initWebRoute(app)

app.listen(port, () => {
	console.log(`Cang app Example app listening on port ${port}`);
});
