import express from 'express';

import {
    getRegistrationNumbersByColorController,
    getSlotNumbersByColorController,
} from '../controllers/slotController.js';

const slotRoutes = express.Router();
slotRoutes.get('/', getRegistrationNumbersByColorController);
slotRoutes.get('/slots', getSlotNumbersByColorController);

export { slotRoutes };
