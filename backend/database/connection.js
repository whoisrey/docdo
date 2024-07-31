const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(process.env.MONGOOSE_URL, {
    tlsAllowInvalidCertificates: true,
  });
};
module.exports = connectDB;
