const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://user_31:user31@cluster0.ijzwi.mongodb.net/nutraworks?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(`Mongodb connected on ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = dbConnection;
