const express = require('express');
const mongoose = require('mongoose');
const bodyParser =require('body-parser');
const cors = require('cors');
const app =express();

app.use(bodyParser.json());
app.use(cors());

const PORT = 8000;
const DB_URL = 'mongodb+srv://Kamindu_99:Kamindu1234@travelmanagementsystem.q7l3w.mongodb.net/VehicleDB?retryWrites=true&w=majority';

mongoose.connect(DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log('DataBase Connected Successful');
})
.catch((err)=>console.log('DataBase Connection Error',err));

app.listen(PORT,()=>{
    console.log(`App is running on ${PORT}`);
});

const vehicleRegistrationRoute=require('./routes/VehicleRegistration');
app.use("/register",vehicleRegistrationRoute);

const CheckVehicle=require('./routes/CheckVehicle');
app.use("/checkvehicle",CheckVehicle);