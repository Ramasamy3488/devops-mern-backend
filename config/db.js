const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log(`MongoDB Connected ✅: ${conn.connection.host}`);
    } catch (error) {
        console.error("MongoDB Error ❌:", error.message);

        // Retry after 5 seconds
        setTimeout(connectDB, 5000);
    }
};

module.exports = { connectDB };




 // await mongoose.connect("mongodb://43.204.235.134:27017/employees");
