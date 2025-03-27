/* ******************************************
 * This server.js file is the primary file of the 
 * application. It is used to control the project.
 *******************************************/

/* ***********************
 * Require Statements
 *************************/
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const path = require('path');
const env = require("dotenv").config();
const static = require("./routes/static");

const app = express(); // ✅ Move this to the top BEFORE using `app`

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Your other routes and settings..

/* ***********************
 * View Engine and Templates
 *************************/
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout", "./layouts/layout"); // not at views root

/* ***********************
 * Routes
 *************************/
// Index route
app.get("/", function(req, res) {
  // Define the messages function
  const messages = () => {
    return 'Hello, welcome to CSE Motors!';
  };

  // Pass 'messages' to the view
  res.render("index", { title: "Home", messages });
});

/* ***********************
 * Local Server Information
 * Values from .env (environment) file
 *************************/
const port = process.env.PORT;
const host = process.env.HOST;

/* ***********************
 * Log statement to confirm server operation
 *************************/
app.listen(port, () => {
  console.log(`App listening on ${host}:${port}`);
});
