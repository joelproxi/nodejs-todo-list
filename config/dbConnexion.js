const mongoose = require('mongoose');

const dbUrl =
  process.env.DATABASE_URL  || "mongodb://localhost:27017/todoApp1";
module.exports = async () => {
    try {
        await mongoose.connect(dbUrl, { useNewUrlParser: true });
        console.log('Connected to database');
    } catch (error) {
        console.error('Error connecting to database');
        throw new Error(error);
    }
}