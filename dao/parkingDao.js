import { Parking } from '../entities/parking.js';

export const parkCarDao = async (parkingLotId, registrationNumber, color) => {
    try {
        const parkingLotFull =
            (await Parking.countDocuments({
                parkingLotId,
                status: 'PARKED',
            })) >= capacity;
        if (parkingLotFull) {
            throw new Error('Parking lot is full');
        }

        const parking = new Parking({
            parkingLotId,
            registrationNumber,
            color,
            status: 'PARKED',
        });
        const error = parking.validateSync();
        await parking.save();

        return parking;
    } catch (error) {
        throw new Error('Error parking car: ' + error.message);
    }
};

export const leaveCarDao = async (parkingLotId, registrationNumber) => {
    try {
        const parking = await Parking.findOne({
            parkingLotId,
            registrationNumber,
            status: 'PARKED',
        });
        if (!parking) {
            throw new Error('Car not found in parking lot');
        }

        parking.status = 'LEFT';
        await parking.save();

        return parking.slotNumber;
    } catch (error) {
        throw new Error('Error leaving car: ' + error.message);
    }
};
