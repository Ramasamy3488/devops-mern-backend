const Employee = require("../models/Employee");

// CREATE
exports.createEmployee = async (req, res) => {
    try {
        const emp = new Employee(req.body);
        const saved = await emp.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(500).json(err);
    }
};

// READ ALL
exports.getEmployees = async (req, res) => {
    try {
        const data = await Employee.find();
        res.json(data);
    } catch (err) {
        res.status(500).json(err);
    }
};

// READ ONE
exports.getEmployeeById = async (req, res) => {
    try {
        const data = await Employee.findById(req.params.id);
        res.json(data);
    } catch (err) {
        res.status(500).json(err);
    }
};

// UPDATE
exports.updateEmployee = async (req, res) => {
    try {
        const updated = await Employee.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updated);
    } catch (err) {
        res.status(500).json(err);
    }
};

// DELETE
exports.deleteEmployee = async (req, res) => {
    try {
        await Employee.findByIdAndDelete(req.params.id);
        res.json({ message: "Deleted successfully" });
    } catch (err) {
        res.status(500).json(err);
    }
};