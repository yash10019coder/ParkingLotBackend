const mongoose = require('mongoose');


const MONGODB_URI = 'mongodb://localhost:27017/parking_lot_db';


const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
};


mongoose.connect(MONGODB_URI, options)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });


module.exports = mongoose.connection;
