const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var reactSchema = new mongoose.Schema({
  likes: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  love: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  funny: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  sad: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  informative: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
});

//Export the model
module.exports = mongoose.model("React", reactSchema);
