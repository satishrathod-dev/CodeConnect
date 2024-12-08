const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://satishUser:sS5jOr5autZYWc3d@cluster0.bft3f.mongodb.net/codeConnect"
  );
};

module.exports = connectDB;
