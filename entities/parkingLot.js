const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const parkingLotSchema = new Schema({
    capacity: {
        type: Number,
        required: true,
        min: 0,
        max: 2000
    },
    isActive: {
        type: Boolean,
        default: true
    }
});

const ParkingLot = mongoose.model('ParkingLot', parkingLotSchema);

module.exports = ParkingLot;
