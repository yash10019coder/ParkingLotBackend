class ParkingDTO {
    constructor(parkingLotId, registrationNumber, color, slotNumber, status) {
        this.parkingLotId = parkingLotId;
        this.registrationNumber = registrationNumber;
        this.color = color;
        this.slotNumber = slotNumber;
        this.status = status;
    }
}

module.exports = ParkingDTO;
