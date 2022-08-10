import React, { Component } from "react";
import axios from "axios";

export default class AllVehicles extends Component {
    constructor(props) {
        super(props);
        this.state = {
          allVehicles: [],
        };
      }
    
      componentDidMount() {
        this.retriveVehicle();
      }
    
      retriveVehicle() {
        axios.get("http://localhost:8000/register").then((res) => {
          if (res.data.success) {
            this.setState({
              allVehicles: res.data.existingVehicle,
            });
          }
        });
      }
    
    
      filterData(allVehicles, searchkey) {
        const result = allVehicles.filter(
          (post) =>
            post.vehicleNumber.toLowerCase().includes(searchkey) ||
            post.vehicleNumber.toUpperCase().includes(searchkey)
        );
        this.setState({ allVehicles: result });
      }
    
      handleSearchArea = (e) => {
        const searchkey = e.currentTarget.value;
    
        axios.get("http://localhost:8000/register").then((res) => {
          if (res.data.success) {
            this.filterData(res.data.existingVehicle, searchkey);
          }
        });
      };
    

      onDelete = (id) =>{
        if(window.confirm("Confirm Delete")){
              axios.delete(`http://localhost:8000/register/delete/${id}`).then((res)=>{
      
              alert("Successfully Deleted");
              this.retriveVehicle();
          })}}


      render() {
    return(
      <div>
        <div>


<div     
              style={{
                
                backgroundColor: "hsla(101, 27%, 53%, 0.27)",
                paddingBottom: "15px",
                paddingTop: "17px",
                
              }}
            >
              <button
              style={{marginLeft:"70px"}}
                    id="search-button"
                    type="button"
                    class="btn btn-primary"
                  >
                    <i class="fas fa-car mr-2"></i><a style={{textDecoration:"none",color:"white"}} href="/registration">Register New Vehicle</a>
                  </button>
           <div  style={{float:"right",marginRight:"20px"}}>
                    <input
                      id="search-input"
                      type="search"
                      style={{width:"400px"}}
                      placeholder="Enter a Vehicle Number"
                      onChange={this.handleSearchArea}
                    />
                 
                  <button
                    id="search-button"
                    type="button"
                    class="btn btn-primary"
                  >
                    <i class="fas fa-search"></i>
                  </button>
                  </div>
            </div>
           


            
           <br/> <br/>
 

<table class="table" style={{backgroundColor:"hsl(0,0%,0%,0.2)"}}>
  <thead class="thead-dark">
    <tr>
      <th scope="col">No</th>
      <th scope="col">Vehicle Number</th>
      <th scope="col">Engine CC</th>
      <th scope="col">Vehicle Model</th>
      <th scope="col">Vehicle Class</th>
      <th scope="col">Year of Made</th>
      <th scope="col">Fuel Used</th>
      <th scope="col">Make Company</th>
      <th scope="col">Action</th>

    </tr>
  </thead>
  <tbody>
  {this.state.allVehicles.map((vehicle, idx) => (
    <tr>
      <th scope="row">{idx + 1}</th>
      <td>{vehicle.vehicleNumber}</td>
      <td>{vehicle.engineCC}</td>
      <td>{vehicle.model}</td>
      <td>{vehicle.vehicleClass}</td>
      <td>{vehicle.yearofMade}</td>
      <td>{vehicle.fuelUsed}</td>
      <td>{vehicle.makeCompany}</td>
      <td><button  className="btn btn-danger btn-sm"><a style={{color:"white",textDecoration:"none"}} href={`/editvehicle/${vehicle._id}`}>Edit</a></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button className="btn btn-danger btn-sm" style={{color:"white"}} onClick={()=>this.onDelete(vehicle._id)}>Delete</button></td>
  
    </tr>
  ))}
  </tbody>
</table>




<br/><br/>
</div>
        </div>
   );
}
}