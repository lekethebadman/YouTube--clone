const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subscriberSchema = mongoose.Schema({
    userTo: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    userForm : {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true })




const Subscriber = mongoose.modelNames('Subscriber'. subscriberSchema);

module.exports = { Subscriber }

