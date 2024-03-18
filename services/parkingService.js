import { parkCarDao, leaveCarDao } from '../dao/parkingDao.js';

export const parkCarService = async (parkingLotId, registrationNumber, color) => {
    await parkCarDao(parkingLotId, registrationNumber, color);
};

export const leaveCarService = async (parkingLotId, registrationNumber) => {
    return await leaveCarDao(parkingLotId, registrationNumber);
};
