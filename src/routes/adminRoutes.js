const express = require("express");
const { isAdmin } = require("../middlewares/auth/isAdmin");
const { isUser } = require("../middlewares/auth/isUser");
const { refreshTokenGenerator } = require("../middlewares/auth/refreshToken");
const { findAdmin, makeAdmin } = require("../post/admin/admin.controller");

const route = express.Router();

route.post("/create", isAdmin, makeAdmin);
route.get("/find", findAdmin);
route.post("/refresh-token", isUser, refreshTokenGenerator);

module.exports = route;
