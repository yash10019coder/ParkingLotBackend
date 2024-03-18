import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const parkingSchema = new Schema({
    parkingLotId: {
        type: Schema.Types.ObjectId,
        ref: 'ParkingLot',
        required: true,
    },
    registrationNumber: {
        type: String,
        required: true,
        validate: (v) => {
            const state = v.slice(0, 2);
            const districtNumber = v.slice(2, 4);
            const uniqueAlphaNumericCode = v.slice(4);
            if (
                state.regex(/^[A-Z]{2}$/) &&
                districtNumber > 0 &&
                districtNumber <= 20 &&
                uniqueAlphaNumericCode.regex(/^[A-Z0-9]{4}$/)
            ) {
                return true;
            } else {
                return false;
            }
        },
    },
    color: {
        type: String,
        enum: ['RED', 'GREEN', 'BLUE', 'BLACK', 'WHITE', 'YELLOW', 'ORANGE'],
        required: true,
    },
    slotNumber: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ['PARKED', 'LEFT'],
        required: true,
    },
});

const Parking = mongoose.model('Parking', parkingSchema);

export {Parking};
