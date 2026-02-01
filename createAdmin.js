require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');

const createAdmin = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to DB...");

        const adminEmail = "admin@test.com"; // Твоя почта для входа
        const adminPassword = "admin123";      // Твой пароль


        const exists = await User.findOne({ email: adminEmail });
        if (exists) {
            console.log("Admin already exists!");
            process.exit();
        }

        const admin = new User({
            email: adminEmail,
            password: adminPassword,
            role: 'admin'
        });

        await admin.save();
        console.log("Admin created successfully!");
        console.log(`Email: ${adminEmail}`);
        console.log(`Password: ${adminPassword}`);

        process.exit();
    } catch (err) {
        console.error(" Error:", err.message);
        process.exit(1);
    }
};

createAdmin();