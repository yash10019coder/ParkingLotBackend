import express from 'express';

import {
    parkCarController,
    leaveCarController,
} from '../controllers/parkingController.js';

const parkingRoutes = express.Router();
parkingRoutes.post('/', parkCarController);
parkingRoutes.delete('/', leaveCarController);

export { parkingRoutes };
