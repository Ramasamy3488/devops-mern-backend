const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    empId: {
        type: String,
        required: true
    },
    name: String,
    email: String,
    age: Number,
    city: String
}, { timestamps: true });

module.exports = mongoose.model("Employee", employeeSchema);