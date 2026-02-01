require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const logger = require('./middleware/logger');

const authRoutes = require('./routes/authRoutes');
const carRoutes = require('./routes/carRoutes');
const rentalRoutes = require('./routes/rentalRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);
app.use(express.static('public'));

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB Connection Error:', err));

app.use('/api/auth', authRoutes);
app.use('/api/cars', carRoutes);
app.use('/api/rentals', rentalRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});