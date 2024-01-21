const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const cors = require("cors");
const app = express();
app.use(cors());

mongoose
    .connect(process.env.DB)
    .then(() => console.log("Connected to the database"))
    .catch((err) => console.error("Error connecting to the database:", err));

// mongoose
//     .connect(process.env.DB, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
// })
// .then(()=>console.log("connected to database"));

module.exports = app;
