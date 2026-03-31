const express = require("express");
const cors = require("cors");
const conn = require("./config/db");

const app = express();

// ✅ Allow ALL origins
app.use(cors());


// // ✅ Restricted
// app.use(cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true
// }));

// Middleware
app.use(express.json());

// DB Connection
conn.connectDB();

// Routes
app.use("/employees", require("./routes/employeeRoutes"));

// Home
app.get("/", (req, res) => {
    res.send("MVC Node + MongoDB CRUD Running 🚀");
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});