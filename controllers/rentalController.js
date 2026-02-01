const Rental = require('../models/Rental');


exports.getAllRentals = async (req, res) => {
    try {
        const rentals = await Rental.find().populate('car');
        res.json(rentals);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


exports.createRental = async (req, res) => {
    try {
        const rental = new Rental(req.body);
        await rental.save();
        res.status(201).json(rental);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


exports.updateRental = async (req, res) => {
    try {
        const updatedRental = await Rental.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedRental) return res.status(404).json({ message: 'Rental not found' });
        res.json(updatedRental);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


exports.deleteRental = async (req, res) => {
    try {
        const deletedRental = await Rental.findByIdAndDelete(req.params.id);
        if (!deletedRental) return res.status(404).json({ message: 'Rental not found' });
        res.json({ message: 'Rental entry deleted successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};