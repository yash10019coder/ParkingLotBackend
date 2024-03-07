const ParkingLot = require('../entities/parkingLot');

exports.createParkingLot = async (capacity) => {
    // Implement logic to create a new parking lot
    if (capacity < 0 || capacity > 2000) {
        throw new Error('Capacity should be between 0 and 2000');
    }
    const parkingLot = new ParkingLot({capacity});
    await parkingLot.save();
    return parkingLot;
};
