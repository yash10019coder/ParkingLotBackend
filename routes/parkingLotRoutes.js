import express from "express";

import {createParkingLotController} from "../controllers/parkingLotController.js";

const parkingLotRoutes = express.Router();
parkingLotRoutes.post('/', createParkingLotController);

export {parkingLotRoutes};
