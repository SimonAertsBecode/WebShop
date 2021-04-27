const app = require("./model/serverConnection");
const express = require("express");
const path = require("path");
const render = require("./controllers/render");

const dir = "/freshShopTemplate/";

let reqPath = path.join(__dirname, "../");

// enable ejs to read files
app.set("views", "..\\freshShopTemplate");
app.set("view engine", "ejs");

// render web pages (utiliser req.url?
render.Render(dir);

//static file for css, images and js
app.use(express.static(reqPath + "freshShopTemplate\\css"));
app.use(express.static(reqPath + "freshShopTemplate\\images"));
app.use(express.static(reqPath + "freshShopTemplate\\images\\payment-icon"));
app.use(express.static(reqPath + "freshShopTemplate\\js"));
app.use(express.static(reqPath + "freshShopTemplate\\php"));
