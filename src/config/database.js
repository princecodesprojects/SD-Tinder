const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      "mongodb+srv://princeshukla885039:SiWI6O1KToJYFR7Y@cluster0.nlojy.mongodb.net/devTinder"
    );
    console.log(
      `\n MongoDB connected  !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("Error in db connection" + error);
    process.exit(1);
  }
};

module.exports = connectDB;
