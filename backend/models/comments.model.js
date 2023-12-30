const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var blogSchema = new mongoose.Schema({
  comment: {
    type: String,
  },
  date: {
    type: String,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
});

//Export the model
module.exports = mongoose.model("Blog", blogSchema);
