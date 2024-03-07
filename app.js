const express = require('express');
const bodyParser = require('body-parser');
const parkingLotRoutes = require('./routes/parkingLotRoutes');
const parkingRoutes = require('./routes/parkingRoutes');
const slotRoutes = require('./routes/slotRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/ParkingLots', parkingLotRoutes);
app.use('/api/Parkings', parkingRoutes);
app.use('/api/Slots', slotRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        isSuccess: false,
        error: {
            reason: 'Internal Server Error'
        }
    });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
