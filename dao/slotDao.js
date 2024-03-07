const Slot = require('../entities/slot');

exports.getRegistrationNumbersByColor = async (color, parkingLotId) => {
    try {
        const slots = await Slot.find({ color, parkingLotId }).populate('parkingLotId');
        if (!slots || slots.length === 0) {
            throw new Error(`No car found with color ${color}`);
        }

        const registrationNumbers = slots.map(slot => slot.parkingLotId.registrationNumber);
        return registrationNumbers;
    } catch (error) {
        throw new Error('Error getting registration numbers by color: ' + error.message);
    }
};

exports.getSlotNumbersByColor = async (color, parkingLotId) => {
    try {
        const slots = await Slot.find({ color, parkingLotId });
        if (!slots || slots.length === 0) {
            throw new Error(`No car found with color ${color}`);
        }

        const slotNumbers = slots.map(slot => slot.slotNumber);
        return slotNumbers;
    } catch (error) {
        throw new Error('Error getting slot numbers by color: ' + error.message);
    }
};
