var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var appointmentSchema = new Schema ({

    userId : {type: Number, required: true},
    time_slot : {type: Number, required: true},
    dentistry : {type: String, required: true}
});

module.exports = mongoose.model('appointments', appointmentSchema);
