const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewURLParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to DB with host name: " + conn.connection.host);
  } catch (err) {
    console.log(`Unable to connect due to ${err.message}`);
    process.exit(1);
  }
};
module.exports = connectDB;
