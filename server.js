const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Backend Running!");
});

app.listen(3000, () => console.log("Server running on port 3000"));

const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://hungnguyen9154_db_user:Hungnguyen9154@cluster0.ksj6m4e.mongodb.net/?appName=Cluster0")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

 
