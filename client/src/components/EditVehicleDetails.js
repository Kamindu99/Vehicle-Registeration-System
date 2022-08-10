import React, { useState, useEffect } from "react";
import {useHistory,useParams } from 'react-router-dom';
import axios from "axios";
import { Form } from "react-bootstrap";
import Select from "react-select";

const EditVehicleDetails = ()=>{

  const [validated, setValidated] = useState(false);

  let history = useHistory();


  const optionList = [
    {  value: "Bicycle", label: "Bicycle" },
    {  value: "Car", label: "Car" },
    {  value: "Van", label: "Van" },
    {  value: "Bus", label: "Bus" },
    {  value: "Lorry", label: "Lorry" },
    {  value: "Treeweel", label: "Treeweel" },
    {  value: "Truck", label: "Truck" },
    {  value: "Tracter", label: "Tracter" }
  ];
  
  function handleSelect(data) {
    setvehicle({ ...vehicle, ["model"]: data.value });
    
  } 

  const { id } = useParams();
  const [vehicle, setvehicle] = useState({
    vehicleNumber: "",
    engineCC: "",
    model: "",
    vehicleClass: "",
    yearofMade: "",
    fuelUsed: "",
    makeCompany: ""
  });
  

  const { vehicleNumber, engineCC,model, vehicleClass,yearofMade,fuelUsed,makeCompany} = vehicle;
  const onInputChange = e => {
    setvehicle({ ...vehicle, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadvehicle();
  }, []);

  const onSubmit = async e => {
    const form = e.currentTarget;
        if (form.checkValidity() === false) {
          e.preventDefault();
          e.stopPropagation();
        }
    
    else{
    e.preventDefault();
    await axios.put(`http://localhost:8000/register/update/${id}`, vehicle);
    alert("Vehicle Details Update Successful")
    window.location.replace("/allvehicle");
  }
  setValidated(true);
  };

  const loadvehicle = async () => {
    const result = await axios.get(`http://localhost:8000/register/${id}`);
    setvehicle(result.data.vehicle);
  };

    return (
      <div >
      <div>
      <br/>
        <div className="container">
        <div className="w-75 mx-auto shadow p-5" style={{backgroundColor:"hsl(0,100%,25%,0.2)"}}>
          <h2 className="text-center mb-5">V e h i c l e  ___  D e t a i l s ___ U p d a t e</h2>
 
          <Form style={{fontSize:"20px"}} noValidate validated={validated} class="signup-form" onSubmit={(e) => onSubmit(e)} encType="multipart/form-data">
           
            <div className="form-group row" controlId="validationCustom01">
            <label for="inputEmail3" class="col-sm-4 col-form-label">Enter Vehicle Number :-</label>
            <div class="col-sm-8">
              <input
                type="text"
                className="form-control "
                placeholder="Enter Vehicle Number"
                name="vehicleNumber"
                value={vehicleNumber}
                onChange={(e) => onInputChange(e)}
                required
              />

               <Form.Control.Feedback type="invalid">
              Please provide a valid Vehicle Number. 
            </Form.Control.Feedback>
            </div></div>

            <div className="form-group row" >
            <label for="inputEmail3" class="col-sm-4 col-form-label">Enter Engine CC :-</label>
            <div class="col-sm-8">
              <input
                type="text"
                className="form-control "
                placeholder="Enter Engine CC"
                name="engineCC"
                value={engineCC}
                onChange={(e) => onInputChange(e)}
                required
              />
              <Form.Control.Feedback type="invalid">
              Please provide valid Engine CC
            </Form.Control.Feedback>
            </div></div>

            <div className="form-group row">
            <label for="inputEmail3" class="col-sm-4 col-form-label">Enter Vehicle Model :-</label>
            <div class="col-sm-8">
            <Select
  options={optionList}
  placeholder="Select Vehicle Model"
  onChange={handleSelect}
  isSearchable={true}
  value={optionList.find(item => item.value === model)}
  required
/>
              <Form.Control.Feedback type="invalid">
              Please provide Valid Vehicle Model 
            </Form.Control.Feedback>
            </div></div>


            <div className="form-group row">
             <label for="inputEmail3" class="col-sm-4 col-form-label">Select Vehicle Class :-</label>
            <div class="col-sm-8"  >

        <input type="radio"  onChange={(e) => onInputChange(e)} value="Auto"  checked={vehicleClass === "Auto"} name="vehicleClass" required/> &nbsp; Auto &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="radio"  onChange={(e) => onInputChange(e)} value="Manual" checked={vehicleClass === "Manual"}  name="vehicleClass" required/>&nbsp; Manual
        
              <Form.Control.Feedback type="invalid">
              Please Select a Vehicle Class
            </Form.Control.Feedback>
            </div> </div>


            <div className="form-group row">
            <label for="inputEmail3" class="col-sm-4 col-form-label">Enter Year Of Made :-</label>
            <div class="col-sm-8">
              <input
                 type="number" min="1800" max="2022" step="1"
                className="form-control"
                placeholder="Enter Year Of Made"
                name="yearofMade"
                value={yearofMade}
                onChange={(e) => onInputChange(e)}
                required
              />
              <Form.Control.Feedback type="invalid">
              Please provide Valid Year
            </Form.Control.Feedback>
            </div></div>
            
          



             <div className="form-group row">
             <label for="inputEmail3" class="col-sm-4 col-form-label">Select Fuel Type :-</label>
            <div class="col-sm-8" >

        <input onChange={(e) => onInputChange(e)} type="radio" checked={fuelUsed === "Petrol"}  value="Petrol" name="fuelUsed" required/>&nbsp; Petrol&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input onChange={(e) => onInputChange(e)} type="radio"  checked={fuelUsed === "Disel"} value="Disel" name="fuelUsed" required/>&nbsp; Disel
        
              <Form.Control.Feedback type="invalid">
              Please Select Fuel Type 
            </Form.Control.Feedback>
            </div></div> 

            <div className="form-group row">
            <label for="inputEmail3" class="col-sm-4 col-form-label">Enter Make Company :-</label>
            <div class="col-sm-8">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Make Company"
                name="makeCompany"
                value={makeCompany}
                onChange={(e) => onInputChange(e)}
                required
              />
              <Form.Control.Feedback type="invalid">
              Please provide Make Company 
            </Form.Control.Feedback>
            </div>
            </div>
<br/>

            <button style={{fontSize:"20px"}} className="btn btn-danger btn-block"><b>U p d a t e</b></button>
          </Form> 
        </div>
      </div>
      </div>
      <br/>


      </div>
    );
};

export default EditVehicleDetails;