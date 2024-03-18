import { createParkingLotDao } from '../dao/parkingLotDao.js';

export const createParkingLotService = async (capacity) => {
    await createParkingLotDao(capacity);
};
