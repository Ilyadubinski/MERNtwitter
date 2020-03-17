const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// so that we can parse the JSON we send to our frontend:

// ROUTES
const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");
// 

app.get("/", (req, res) => res.send("Hello World"));
const db = require("./config/keys").mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));


// ROUTES
app.use("/api/users", users);
app.use("/api/tweets", tweets);

// parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());