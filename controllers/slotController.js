import {
    getRegistrationNumbersByColorService,
    getSlotNumbersByColorService,
} from '../services/slotService.js';

export const getRegistrationNumbersByColorController = async (req, res) => {
    try {
        const { color, parkingLotId } = req.query;
        const registrations = await getRegistrationNumbersByColorService(
            color,
            parkingLotId,
        );
        res.status(200).json({
            isSuccess: true,
            response: {
                registrations,
            },
        });
    } catch (error) {
        console.error('Error fetching registration numbers by color:', error);
        res.status(500).json({
            isSuccess: false,
            error: {
                reason: 'Internal Server Error',
            },
        });
    }
};

export const getSlotNumbersByColorController = async (req, res) => {
    try {
        const { color, parkingLotId } = req.query;
        const slots = await getSlotNumbersByColorService(color, parkingLotId);
        res.status(200).json({
            isSuccess: true,
            response: {
                slots,
            },
        });
    } catch (error) {
        console.error('Error fetching slot numbers by color:', error);
        res.status(500).json({
            isSuccess: false,
            error: {
                reason: 'Internal Server Error',
            },
        });
    }
};
