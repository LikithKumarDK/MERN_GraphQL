const mongoose = require('mongoose');

const connectDB = async (req, res, next) => {
    console.log(process.env.MANGO_URI);
    const conn = await mongoose.connect(process.env.MANGO_URI);

    console.log(`MongoDB Connected to ${conn.connection.host}`.cyan.underline.bold);
};

module.exports = connectDB;