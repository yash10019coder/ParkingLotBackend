const Parking = require('../dao/parkingDao');

exports.parkCar = async (parkingLotId, registrationNumber, color) => {
    await Parking.parkCar(parkingLotId, registrationNumber, color);
};

exports.leaveCar = async (parkingLotId, registrationNumber) => {
    return await Parking.leaveCar(parkingLotId, registrationNumber);
};