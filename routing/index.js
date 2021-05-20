const { CloudantV1 } = require('@ibm-cloud/cloudant');
const service = require('../config/cloudant')

module.exports=(req,res,next)=>{
   return res.status(200).json({status:200,mensage:'systema de usuarios'});
    
    }