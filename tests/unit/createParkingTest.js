const { expect } = require('chai');
const request = require('supertest');
const sinon = require('sinon');
const app = require('../app');
const parkingLotService = require('services/parkingLotService');

describe('Parking Lot Management System', () => {
    describe('Create Parking Lot', () => {
        it('should create a parking lot with the specified capacity', async () => {
            const response = await request(app)
                .post('/api/ParkingLots')
                .send({ capacity: 100 });

            expect(response.status).to.equal(200);
            expect(response.body).to.have.property('id');
            expect(response.body).to.have.property('capacity', 100);
            expect(response.body).to.have.property('isActive', true);
        });

        it('should reject creating a parking lot with negative capacity', async () => {
            const response = await request(app)
                .post('/api/ParkingLots')
                .send({ capacity: -10 });

            expect(response.status).to.equal(400);
            expect(response.body).to.have.property('error');
        });
    });

    describe('Park Car', () => {
        beforeEach(() => {
            sinon
                .stub(parkingLotService, 'parkCar')
                .resolves({ slotNumber: 1, status: 'PARKED' });
        });

        afterEach(() => {
            sinon.restore();
        });

        it('should park a car and return parking info', async () => {
            const response = await request(app).post('/api/Parkings').send({
                parkingLotId: '65e72adb1a811501c45afd72',
                registrationNumber: 'MH12A1234',
                color: 'YELLOW',
            });

            expect(response.status).to.equal(200);
            expect(response.body).to.have.property('slotNumber', 1);
            expect(response.body).to.have.property('status', 'PARKED');
        });
    });
});
