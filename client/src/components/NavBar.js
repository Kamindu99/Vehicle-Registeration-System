import React from "react"

const NavBar = ()=>{
    return(
        <div style={{fontSize:"20px",backgroundColor:"black",height:"70px"}}>
<ul class="nav nav-pills justify-content-center">
  <li class="nav-item mr-5" >
    <a style={{backgroundColor:"gray",color:"black", marginTop:"10px"}} class="nav-link " aria-current="page" href="/"><b>Check Vehicle</b></a>
  </li>
  <li class="nav-item mr-5">
    <a style={{backgroundColor:"gray",color:"black", marginTop:"10px"}} class="nav-link" href="/registration"><b>Registration</b></a>
  </li>
  <li class="nav-item ">
    <a style={{backgroundColor:"gray",color:"black", marginTop:"10px"}} class="nav-link" href="/allvehicle"><b>All Vehicle</b></a>
  </li>
  
</ul>

        </div>
    )
}

export default NavBar;

