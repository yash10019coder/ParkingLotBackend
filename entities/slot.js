const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const slotSchema = new Schema({
    parkingLotId: {
        type: Schema.Types.ObjectId,
        ref: 'ParkingLot',
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
    }
});

const Slot = mongoose.model('Slot', slotSchema);

module.exports = Slot;