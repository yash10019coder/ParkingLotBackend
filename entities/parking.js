const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const parkingSchema = new Schema({
    parkingLotId: {
        type: Schema.Types.ObjectId,
        ref: 'ParkingLot',
        required: true
    },
    registrationNumber: {
        type: String,
        required: true
    },
    color: {
        type: String,
        enum: ['RED', 'GREEN', 'BLUE', 'BLACK', 'WHITE', 'YELLOW', 'ORANGE'],
        required: true
    },
    slotNumber: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['PARKED', 'LEFT'],
        required: true
    }
});

const Parking = mongoose.model('Parking', parkingSchema);

module.exports = Parking;