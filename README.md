# Parking Lot Management System

This project is a Parking Lot Management System API built using Node.js, Express.js, and MongoDB.

## Overview

The Parking Lot Management System is designed to efficiently manage parking spaces in a parking lot. It provides APIs for creating parking lots, parking cars, removing cars, and querying parking information based on various criteria such as color and registration number.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yash10019coder/ParkingLotBackend.git
cd ParkingLotBackend
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

Create a `.env` file in the root directory and add the following variables:

```plaintext
MONGODB_URI=<your_mongodb_uri>
PORT=<port_number>
```

Replace `<your_mongodb_uri>` with your MongoDB connection URI and `<port_number>` with the desired port number.

4. Start the server:

```bash
npm start
```

## API Documentation

### Parking Lots

- **Create Parking Lot**
    - Endpoint: `POST /api/ParkingLots`
    - Description: Create a new parking lot with the specified capacity.
    - Request Body:
      ```json
      {
        "capacity": 100
      }
      ```
    - Response:
      ```json
      {
        "id": "65e72adb1a811501c45afd72",
        "capacity": 100,
        "isActive": true
      }
      ```

### Parkings

- **Park Car**
    - Endpoint: `POST /api/Parkings`
    - Description: Park a car in the parking lot.
    - Request Body:
      ```json
      {
        "parkingLotId": "65e72adb1a811501c45afd72",
        "registrationNumber": "MH12A1234",
        "color": "YELLOW"
      }
      ```
    - Response:
      ```json
      {
        "slotNumber": 1,
        "status": "PARKED"
      }
      ```

- **Leave Car**
    - Endpoint: `DELETE /api/Parkings`
    - Description: Remove a car from the parking lot.
    - Request Body:
      ```json
      {
        "parkingLotId": "65e72adb1a811501c45afd72",
        "registrationNumber": "MH12A1234"
      }
      ```
    - Response:
      ```json
      {
        "isSuccess": true,
        "response": {
          "slotNumber": 1,
          "status": "LEFT"
        }
      }
      ```

### Slots

- **Fetch Slots by Color**
    - Endpoint: `GET /api/Slots`
    - Description: Get slot numbers for cars of a specific color in the parking lot.
    - Query Parameters: `color`, `parkingLotId`
    - Example: `/api/Slots?color=WHITE&parkingLotId=65e72adb1a811501c45afd72`
    - Response:
      ```json
      {
        "slots": [
          {
            "color": "WHITE",
            "slotNumber": 2
          },
          {
            "color": "WHITE",
            "slotNumber": 3
          }
        ]
      }
      ```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT License](LICENSE)

## Technologies Used

- **Node.js**: Server-side JavaScript runtime environment.

- **Express.js**: Web application framework for Node.js.

- **MongoDB**: NoSQL database for storing and managing data.

- **Mongoose**: MongoDB object modeling tool for Node.js.

## Architecture Overview

The Parking Lot Management System follows a client-server architecture, where the server provides APIs for managing parking lots and cars, and the client (front-end application or API consumer) interacts with these APIs to perform operations.

## Error Handling

The application implements global error handling middleware to catch and handle errors that occur during request processing. It ensures consistent error responses are sent back to the client with appropriate status codes and error messages.

## Logging

The Winston logging library is used to record application logs. Logs are generated for debugging, monitoring, and performance analysis purposes.

## Testing

The application includes unit tests and integration tests to ensure the correctness and reliability of its functionality. Testing frameworks like Jest or Mocha are typically used for writing and executing tests.

## Security

Security measures such as input validation, authentication, and authorization can be implemented to prevent unauthorized access and ensure data integrity and confidentiality.
