// config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://7yuS3a4vmqgoxZI9:7yuS3a4vmqgoxZI9@deeze.767pb6a.mongodb.net/ChordBeat?retryWrites=true&w=majority&appName=ChordBeat", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected...');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
