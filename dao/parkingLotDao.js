import { ParkingLot } from '../entities/parkingLot.js';

export const createParkingLotDao = async (capacity) => {
    try {
        if (capacity < 0 || capacity > 2000) {
            throw new Error('Capacity should be between 0 and 2000');
        }
        const parkingLot = new ParkingLot({ capacity });
        await parkingLot.save();
        return parkingLot;
    } catch (error) {
        throw new Error('Error creating parking lot: ' + error.message);
    }
};
