const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://43.204.235.134:27017/employees");
        // await mongoose.connect("mongodb://localhost:27017/employees");
        console.log("MongoDB Connected ✅");
    } catch (error) {
        console.error("MongoDB Error:", error);
        process.exit(1);
    }
};

module.exports = {connectDB};