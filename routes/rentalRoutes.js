const express = require('express');
const router = express.Router();
const rentalController = require('../controllers/rentalController');
const { protect, adminOnly } = require('../middleware/authMiddleware');


router.get('/', protect, rentalController.getAllRentals);
router.post('/', protect, rentalController.createRental);
router.put('/:id', protect, adminOnly, rentalController.updateRental);
router.delete('/:id', protect, adminOnly, rentalController.deleteRental);

module.exports = router;