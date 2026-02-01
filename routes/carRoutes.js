const express = require('express');
const router = express.Router();
const carController = require('../controllers/carController');
const { protect, adminOnly } = require('../middleware/authMiddleware');


router.get('/', carController.getAllCars);
router.get('/:id', carController.getCarById);


router.post('/', protect, adminOnly, carController.createCar);
router.put('/:id', protect, adminOnly, carController.updateCar);
router.delete('/:id', protect, adminOnly, carController.deleteCar);

module.exports = router; // ОБЯЗАТЕЛЬНО