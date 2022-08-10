var express = require("express");
var router = express.Router();


router.post('/add',(req,res)=>{
    var nameA=req.body.name;
    
if(/^([a-zA-Z]{1,3}|((?!0*-)[0-9]{1,3}))( {0,1})-( {0,1})([0-9]{4})(?<!0{4})/.test(nameA))
{
    if(/[a-zA-Z]/.test(nameA))    
        nameA="Modern Vehicle";
    else
        nameA="Old Vehicle";
}
else if(/^([a-zA-Z]{2,2}( {1,1})[a-zA-Z]{1,3})( {0,1})-( {0,1})[0-9]{4}(?<!0{4})/.test(nameA))
{  
        nameA="Modern Vehicle";   
}
else if(/^([a-zA-Z]{2,2}( {1,1})((?!0*-)[0-9]{1,3}))( {0,1})-( {0,1})[0-9]{4}(?<!0{4})/.test(nameA))
{  
        nameA="Old Vehicle";   
}
else if(/^(([0-9]{1,3})ශ්‍රී)[0-9]{1,4}/.test(nameA))
{
    nameA="Vintage Vehicle";
}
else if(nameA.length === 0)
{
    nameA="Please Enter Vehicle Number";
}
else{
    nameA="Invalide Vehicle Number";
}
res.send(nameA);
   
});


module.exports= router;