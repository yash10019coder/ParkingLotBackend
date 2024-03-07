const express = require('express');
const bodyParser = require('body-parser');
const parkingLotRoutes = require('./routes/parkingLotRoutes');
const parkingRoutes = require('./routes/parkingRoutes');
const slotRoutes = require('./routes/slotRoutes');
const logger = require('./logger/logger')

const app = express();

// Middleware
app.use(bodyParser.json());

// Logger middleware
app.use((req, res, next) => {
    logger.info(`${req.method} ${req.url}`); // Log the request method and URL
    next();
});

// Your other middleware and route handling code goes here

// Error handling middleware
app.use((err, req, res, next) => {
    logger.error(err.stack); // Log the error stack trace
    res.status(500).send('Something went wrong!');
});


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
