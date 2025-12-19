const express = require("express");
const mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
 res.send("Backend Running!!! CI/CD OK");
});
mongoose.connect(process.env.MONGODB_URI)
 .then(() => console.log("MongoDB Connected"))
 .catch(err => console.log(err));
app.listen(PORT, () => console.log("Server running on port", PORT));
