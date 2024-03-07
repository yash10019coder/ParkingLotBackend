const Parking = require('../entities/parking');

exports.parkCar = async (parkingLotId, registrationNumber, color) => {
    try {
        // Assume parkingLotId is valid and capacity checks have been done elsewhere

        // Check if the parking lot has available slots
        const parkingLotFull = await Parking.countDocuments({ parkingLotId, status: 'PARKED' }) >= capacity;
        if (parkingLotFull) {
            throw new Error('Parking lot is full');
        }

        // Create a new parking entry
        const parking = new Parking({
            parkingLotId,
            registrationNumber,
            color,
            status: 'PARKED'
        });
        await parking.save();

        return parking;
    } catch (error) {
        throw new Error('Error parking car: ' + error.message);
    }
};

exports.leaveCar = async (parkingLotId, registrationNumber) => {
    try {
        // Find the parking entry for the given registration number and parking lot ID
        const parking = await Parking.findOne({ parkingLotId, registrationNumber, status: 'PARKED' });
        if (!parking) {
            throw new Error('Car not found in parking lot');
        }

        // Update the parking status to 'LEFT'
        parking.status = 'LEFT';
        await parking.save();

        return parking.slotNumber; // Return the slot number of the parked car
    } catch (error) {
        throw new Error('Error leaving car: ' + error.message);
    }
};
