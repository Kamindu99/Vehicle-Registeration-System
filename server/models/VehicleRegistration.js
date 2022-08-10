const mongoose = require('mongoose');
const registrationSchema = new mongoose.Schema ({
    vehicleNumber:{
        type:String,
        required:true
    },
    engineCC:{
        type:String,
        required:true
    },
    model:{
        type:String,
        required:true
    },
    vehicleClass:{
        type:String,
        required:true
    },
    yearofMade:{
        type:String,
        required:true
    },
    fuelUsed:{
        type:String,
        required:true
    },
    makeCompany:{
        type:String,
        required:true
    }


});

module.exports = mongoose.model('vehicleregister',registrationSchema);