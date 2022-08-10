const express = require('express');
const VehicleRegister = require('../models/VehicleRegistration');
const router =express.Router();

//new registration
router.post('/newregistration',(req,res)=>{
    const newRegister=new VehicleRegister({
        vehicleNumber:req.body.vehicleNumber,
        engineCC:req.body.engineCC,
        model:req.body.model,
        vehicleClass:req.body.vehicleClass,
        yearofMade:req.body.yearofMade,
        fuelUsed:req.body.fuelUsed,
        makeCompany:req.body.makeCompany,

    });
    newRegister
    .save()
    .then(()=>res.json("New Vehicle Register Successfull"))
    .catch((err)=>res.status(400).json(`Error:${err}`));
});


//get all registarions
router.get('/',(req,res)=>{
    VehicleRegister.find().exec((err,vehicle)=>{
        if (err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingVehicle:vehicle
        });
    });
})


//get Vehicle details by id
router.get('/:id',(req,res)=>{
    let vehicleId=req.params.id;
    VehicleRegister.findById(vehicleId , (err,vehicle)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            vehicle
        });
    });
});


//update Vehicle Registration Details
router.put('/update/:id',(req,res)=>{
    VehicleRegister.findByIdAndUpdate(req.params.id)
    .then((vehicle )=> {
        vehicle.vehicleNumber=req.body.vehicleNumber;
        vehicle.engineCC=req.body.engineCC;
        vehicle.model=req.body.model;
        vehicle.vehicleClass=req.body.vehicleClass;
        vehicle.yearofMade=req.body.yearofMade;
        vehicle.fuelUsed=req.body.fuelUsed;
        vehicle.makeCompany=req.body.makeCompany;

        vehicle
            .save()
            .then(() => res.json("Vehicle Details UPDATED successfully"))
            .catch(err => res.status(400).json(`Error: ${err}`));
    })
    .catch(err => res.status(400).json(`Error: ${err}`));
});


//delete registration
router.delete('/delete/:id',(req,res)=>{
    VehicleRegister.findByIdAndRemove(req.params.id).exec((err,deletedVehicle)=>{
        if(err) return res.status(400).json({
          message:"Vehicle Delete unsuccesful",err
        });
        return res.json({
            message:"Vehicle Delete succesful",deletedVehicle
        });
    });
});




module.exports=router;