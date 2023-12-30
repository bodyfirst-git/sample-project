const Blog = require("../models/blog.model");
const User = require("../models/auth.model");
const Comment = require("../models/comments.model");
const React = require("../models/reacts.model");

const uploadBlog = async (req, res) => {
  try {
    const {
      blogDesktopImg,
      blogMobileImg,
      author,
      date,
      title,
      category,
      body,
    } = req.body;

    const newBlog = new Blog({
      blogDesktopImg,
      blogMobileImg,
      author,
      date,
      title,
      category,
      body,
    });

    const savedBlog = await newBlog.save();

    return res.status(200).status(savedBlog);
  } catch (error) {
    return res.status(500).status({ error: "something went wrong" });
  }
};

const getAllBlogs = async (req, res) => {
  try {
    const { authorId, categoryId, searchInput } = req.body;
    const searchPara = {};
    if (authorId != "" || categoryId != "") {
      searchPara.author = authorId;
      searchPara.category = categoryId;
    }

    if (searchInput != "") {
      searchPara.query = { $text: { $search: searchInput } };
    }

    const blogs = await Blog.find(searchPara)
      .populate("category", "name")
      .populate("author", "name")
      .populate("reacts")
      .populate("comments");

    console.log(blogs);
  } catch (error) {
    return res.status(500).json({ error: "something went wrong" });
  }
};
