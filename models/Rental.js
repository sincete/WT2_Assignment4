const mongoose = require('mongoose');

const rentalSchema = new mongoose.Schema({
    car: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Car',
        required: true
    },
    customerName: { type: String, required: true },
    rentalDays: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    startDate: { type: Date, default: Date.now }
}, {
    timestamps: true
});

module.exports = mongoose.model('Rental', rentalSchema);