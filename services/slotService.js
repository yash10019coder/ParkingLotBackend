const {Slot} = require('../entities/slot');
const SlotDto = require('../dto/slotDto');

exports.getRegistrationNumbersByColor = async (color, parkingLotId) => {
    const slot = await Slot.find({color, parkingLotId}).populate('parkingLotId');
    const registrationNumbers = slot.map(slot => slot.parkingLotId.registrationNumber);
    return registrationNumbers;
};

exports.getSlotNumbersByColor = async (color, parkingLotId) => {
    const slot = await Slot.find({color, parkingLotId});
    const slotNumbers = slot.map(slot => slot.slotNumber);
    return slotNumbers;
};
