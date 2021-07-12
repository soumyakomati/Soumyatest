const mongoose = require( 'mongoose' );

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    roles: {
        type: [ String ],
        enum: [ 'general', 'admin' ],
        default: 'general'
    }
});

mongoose.model( 'User', userSchema );
