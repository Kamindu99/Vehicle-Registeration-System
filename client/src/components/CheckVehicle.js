import{React,useState,useEffect} from 'react';
import axios from "axios";

const CheckVehicle = ()=>{

  const[apiRes,setApires]=useState("");


  const [vehicle, addName] = useState({
    name: "",
  });
  const { name } = vehicle;
  const onInputChange = (e) => {
    addName({ ...vehicle, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8000/checkvehicle/add", vehicle)
    .then((res) => {
      setApires(res.data)
    });

  };

    return(
        <div >
           <div>
           <div style={{textAlign: "center", marginTop:"100px"}}>
          <h4>Please Enter Your Vehicle Number to check whather Model of Vehicle..?</h4> 
          (Note:- Enter Your Vehicle Number as ex:- 13 ශ්‍රී 1111 / 250-9999 , 19-9999 / WP GA-9999, CAR-9999)<br/><br/><br/>
          <form onSubmit={(e) => onSubmit(e)}>
               <input
                      id="search-input"
                      type="text"
                      name="name"
                      value={name}
                      className="form-control-lg col-sm-5"
                      minLength={3}  
                      maxLength={100}
                      placeholder="Enter a Vehicle Number"
                      onChange={(e) => onInputChange(e)}
                    
                    />
                     <button
                    type="submit"
                    class="btn btn-lg btn-primary"
                    style={{height:"47px"}}
                  >
                    Check&nbsp;&nbsp;<i class="fas fa-search "></i>
                  </button>
              
                  </form>
                 
                  
        <center><h1><br/>{apiRes}<br/><br/></h1> </center> <hr/>
                 <h6>Made by Kamindu Gayantha </h6>
                       071 5273881<br/>
                       kamidugayantha123@gmail.com
                  </div>
            </div>
            
        </div>
    )
}

export default CheckVehicle;

