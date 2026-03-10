const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/freshproduce';
        await mongoose.connect(uri);
        console.log('MongoDB Connected');
    } catch (error) {
        console.error('MongoDB Connection Failed:', error.message);
        // Do not crash the app entirely if MongoDB fails (since it's a dynamic MERN challenge, we want resilience)
    }
};

module.exports = connectDB;
