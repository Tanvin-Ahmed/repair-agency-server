const express = require("express");
const { isUser } = require("../middlewares/auth/isUser");
const { refreshTokenGenerator } = require("../middlewares/auth/refreshToken");
const { isAdmin, makeAdmin } = require("../post/admin/admin.controller");

const route = express.Router();

route.post("/create", makeAdmin);
route.get("/find", isAdmin);
route.post("/refresh-token", isUser, refreshTokenGenerator);

module.exports = route;
