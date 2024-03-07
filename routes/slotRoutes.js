const express = require('express');
const router = express.Router();
const slotController = require('../controllers/slotController');

router.get('/', slotController.getRegistrationNumbersByColor);
router.get('/slots', slotController.getSlotNumbersByColor);

module.exports = router;
