const mongoose = require("mongoose");
const { app } = require("../config/app");

module.exports = () => {
  const url = app.db_url;

  if (!url) return console.log("URL not specified!");

  mongoose.set("strictQuery", false);
  mongoose.connect(url, (err) => {
    if (err) console.log(err.message);
    else console.log("DB connection established!");
  });
};
