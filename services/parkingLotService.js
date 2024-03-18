const {createParkingLot} = require('../dao/parkingLotDao');

exports.createParkingLot = async (capacity) => {
    await createParkingLot(capacity);
};
