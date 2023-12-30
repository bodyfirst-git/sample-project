const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var blogSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  date: {
    type: String,
    required: true,
    default: new Date(),
  },
  title: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.Schema.ObjectId,
    ref: "Category",
    required: true,
  },
  body: {
    type: String,
  },
  reacts: {
    type: mongoose.Schema.ObjectId,
    ref: "Reacts",
  },
  comments: {
    type: mongoose.Schema.ObjectId,
    ref: "Comments",
  },

  blogDesktopImg: {
    type: String,
  },
  blogMobileImg: {
    type: String,
  },
});

//Export the model
module.exports = mongoose.model("Blog", blogSchema);
