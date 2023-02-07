const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();

const app = express();
 
//middleware
app.use(express.json());
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/CRUD",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Connected to MongoDB");
      }
    }
  );
app.listen(process.env.PORT, () => {
  console.log("Server is running on port 3001");
  console.log(process.env.PORT)
});
 
module.exports = app;
