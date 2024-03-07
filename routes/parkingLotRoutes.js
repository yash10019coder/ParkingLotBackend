const express = require('express');
const router = express.Router();
const parkingLotController = require('../controllers/parkingLotController');

router.post('/', parkingLotController.createParkingLot);

module.exports = router;
