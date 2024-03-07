const ParkingLotService = require('../services/parkingLotService');

exports.createParkingLot = async (req, res) => {
    try {
        const { capacity } = req.body;
        const parkingLot = await ParkingLotService.createParkingLot(capacity);
        res.status(201).json({
            isSuccess: true,
            response: parkingLot
        });
    } catch (error) {
        console.error('Error creating parking lot:', error);
        res.status(500).json({
            isSuccess: false,
            error: {
                reason: 'Internal Server Error'
            }
        });
    }
};
