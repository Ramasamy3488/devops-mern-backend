const mongoose = require("mongoose");

const connectDB = async () => {
    const uri = process.env.MONGO_URI;

    if (!uri) {
        console.error("❌ MONGO_URI not defined");
        process.exit(1);
    }

    try {
        const conn = await mongoose.connect(uri);
        console.log(`MongoDB Connected ✅: ${conn.connection.host}`);
    } catch (error) {
        console.error("MongoDB Error ❌:", error.message);

        // Retry instead of exit
        setTimeout(connectDB, 5000);
    }
};

module.exports = { connectDB };




 // await mongoose.connect("mongodb://43.204.235.134:27017/employees");
