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

// Define save method
parkingLotSchema.methods.save = async function() {
    try {
        return await this.save();
    } catch (error) {
        throw new Error('Error saving parking lot: ' + error.message);
    }
}

const ParkingLot = mongoose.model('ParkingLot', parkingLotSchema);

module.exports = { ParkingLot, save: parkingLotSchema.methods.save };
