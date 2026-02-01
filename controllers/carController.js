const Car = require('../models/Car');

exports.getAllCars = async (req, res) => {
    const cars = await Car.find();
    res.json(cars);
};

exports.getCarById = async (req, res) => {
    try {
        const car = await Car.findById(req.params.id);
        if (!car) return res.status(404).json({ message: 'Car not found' });
        res.json(car);
    } catch (err) {
        res.status(400).json({ message: 'Invalid ID' });
    }
};

exports.createCar = async (req, res) => {
    try {
        const newCar = new Car(req.body);
        await newCar.save();
        res.status(201).json(newCar);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.updateCar = async (req, res) => {
    try {
        const updatedCar = await Car.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedCar) return res.status(404).json({ message: 'Car not found' });
        res.json(updatedCar);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.deleteCar = async (req, res) => {
    try {
        const deletedCar = await Car.findByIdAndDelete(req.params.id);
        if (!deletedCar) return res.status(404).json({ message: 'Car not found' });
        res.json({ message: 'Car deleted' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};