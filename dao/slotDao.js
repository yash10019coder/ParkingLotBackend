const ParkingLot = require('../entities/parkingLot');

exports.createParkingLot = async (capacity) => {
    const parkingLot = new ParkingLot({
        capacity
    });
    await parkingLot.save();
    return parkingLot;
};
