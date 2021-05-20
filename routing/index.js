const response =require("../config/cloudant")

module.exports=(req,res,next)=>{
    response.getAllDbs().then(response => {
        console.log(response.result);
        return res.status(200).json({ code : 1, mensage : response.result});
      });
    
    
    }