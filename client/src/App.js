import AllVehicles from './components/AllVehicles';
import EditVehicleDetails from './components/EditVehicleDetails';
import Restration from './components/Restration';
import Navbar from './components/NavBar';
import CheckVehicle from './components/CheckVehicle';
import "./App.css"

import {BrowserRouter as Router, Route} from "react-router-dom"

function App() {
  return (
    <Router>
    <div> 
<Navbar/>
      <Route path="/allvehicle" exact component = {AllVehicles}></Route>
      <Route path="/editvehicle/:id" exact component = {EditVehicleDetails}></Route>
      <Route path="/registration" exact component = {Restration}></Route>
      <Route path="/" exact component = {CheckVehicle}></Route>
   
    </div>
    </Router>
    
    
  );
}

export default App;
