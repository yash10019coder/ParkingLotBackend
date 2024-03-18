import { parkCarService, leaveCarService } from '../services/parkingService.js';

export const parkCarController = async (req, res) => {
    try {
        const { parkingLotId, registrationNumber, color } = req.body;
        const parkingInfo = await parkCarService(
            parkingLotId,
            registrationNumber,
            color,
        );
        res.status(200).json({
            isSuccess: true,
            response: parkingInfo,
        });
    } catch (error) {
        console.error('Error parking car:', error);
        res.status(500).json({
            isSuccess: false,
            error: {
                reason: 'Internal Server Error',
            },
        });
    }
};

export const leaveCarController = async (req, res) => {
    try {
        const { parkingLotId, registrationNumber } = req.body;
        const slotNumber = await leaveCarService(
            parkingLotId,
            registrationNumber,
        );
        res.status(200).json({
            isSuccess: true,
            response: {
                slotNumber,
                status: 'LEFT',
            },
        });
    } catch (error) {
        console.error('Error leaving car:', error);
        res.status(500).json({
            isSuccess: false,
            error: {
                reason: 'Internal Server Error',
            },
        });
    }
};
