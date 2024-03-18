import {logger} from './logger/logger.js';

import {slotRoutes} from './routes/slotRoutes.js';

import {parkingRoutes} from './routes/parkingRoutes.js';

import {parkingLotRoutes} from './routes/parkingLotRoutes.js';

import bodyParser from 'body-parser';

import express from 'express';

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    logger.info(`${req.method} ${req.url}`);
    next();
});

app.use((err, req, res, next) => {
    logger.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.use('/api/ParkingLots', parkingLotRoutes);
app.use('/api/Parkings', parkingRoutes);
app.use('/api/Slots', slotRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        isSuccess: false,
        error: {
            reason: 'Internal Server Error',
        },
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
