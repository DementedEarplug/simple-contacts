const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");


const connectDB = async ()=> {
  try {
    const conn = await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    })
    console.log("Connected to MongoDB")
  } catch (error) {
    console.log(error.message)
    process.exit(1)
  }
}

module.exports = connectDB