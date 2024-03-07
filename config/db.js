const mongoose = require('mongoose');

// Database connection URI
const MONGODB_URI = 'mongodb://localhost:27017/parking_lot_db';

// Database connection options
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
};

// Connect to the database
mongoose.connect(MONGODB_URI, options)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

// Export the database connection
module.exports = mongoose.connection;
