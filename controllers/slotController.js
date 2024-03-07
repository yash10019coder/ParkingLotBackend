const SlotService = require('../services/slotService');

exports.getRegistrationNumbersByColor = async (req, res) => {
    try {
        const { color, parkingLotId } = req.query;
        const registrations = await SlotService.getRegistrationNumbersByColor(color, parkingLotId);
        res.status(200).json({
            isSuccess: true,
            response: {
                registrations
            }
        });
    } catch (error) {
        console.error('Error fetching registration numbers by color:', error);
        res.status(500).json({
            isSuccess: false,
            error: {
                reason: 'Internal Server Error'
            }
        });
    }
};

exports.getSlotNumbersByColor = async (req, res) => {
    try {
        const { color, parkingLotId } = req.query;
        const slots = await SlotService.getSlotNumbersByColor(color, parkingLotId);
        res.status(200).json({
            isSuccess: true,
            response: {
                slots
            }
        });
    } catch (error) {
        console.error('Error fetching slot numbers by color:', error);
        res.status(500).json({
            isSuccess: false,
            error: {
                reason: 'Internal Server Error'
            }
        });
    }
};
