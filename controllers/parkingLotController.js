import { createParkingLotService } from '../services/parkingLotService.js';

export const createParkingLotController = async (req, res) => {
    try {
        const { capacity } = req.body;
        const parkingLot = await createParkingLotService(capacity);
        res.status(201).json({
            isSuccess: true,
            response: parkingLot,
        });
    } catch (error) {
        console.error('Error creating parking lot:', error);
        res.status(500).json({
            isSuccess: false,
            error: {
                reason: 'Internal Server Error',
            },
        });
    }
};
