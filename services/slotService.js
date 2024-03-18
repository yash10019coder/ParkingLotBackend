import {
    getRegistrationNumbersByColorDao,
    getSlotNumbersByColorDao,
} from '../dao/slotDao.js';

export const getRegistrationNumbersByColorService = async (
    color,
    parkingLotId,
) => {
    const registrationNumbers = await getRegistrationNumbersByColorDao(
        color,
        parkingLotId,
    );
    return registrationNumbers;
};

export const getSlotNumbersByColorService = async (color, parkingLotId) => {
    const slotNumbers = getSlotNumbersByColorDao(color, parkingLotId);
    return slotNumbers;
};
