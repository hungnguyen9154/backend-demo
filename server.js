const express = require("express");
const mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Backend Running OK 🎉");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on port", PORT);
});

// connect mongo nhưng KHÔNG được làm app stop
mongoose.connect(process.env.MONGODB_URI, {
  serverSelectionTimeoutMS: 5000
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log("MongoDB Failed:", err.message));
