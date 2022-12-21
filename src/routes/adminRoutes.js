const express = require("express");
const { isAdmin, makeAdmin } = require("../post/admin/admin.controller");

const route = express.Router();

route.post("/create", makeAdmin);
route.get("/find/:email", isAdmin);

module.exports = route;
