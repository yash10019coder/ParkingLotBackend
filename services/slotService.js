const {getRegistrationNumbersByColor, getSlotNumbersByColor} = require('../dao/slotDao');

exports.getRegistrationNumbersByColor = async (color, parkingLotId) => {
    const registrationNumbers = await getRegistrationNumbersByColor(color, parkingLotId);
    return registrationNumbers;
};

exports.getSlotNumbersByColor = async (color, parkingLotId) => {
    const slotNumbers = getSlotNumbersByColor(color, parkingLotId);
    return slotNumbers;
};
