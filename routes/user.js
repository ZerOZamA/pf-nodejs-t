const express = require('express');
const user =express.Router();
const jwt = require('jsonwebtoken');
const service = require('../config/cloudant')


user.post("/login",async(req,res,next)=>{
    const {user_mail,user_password}= req.body;

    if(user_mail && user_password){    
        service.getDocument({
            db: 'admin',
            docId: user_mail
          }).then(response => {
            console.log(response.result);
            const jsuser = response.result
            console.log(jsuser['password'])
                if(user_password==jsuser['password'])
                {
                    console.log(jsuser['password'])
                    console.log(jsuser['_id'])
                    const token = jwt.sign({
                    pass:jsuser['password']
                    },"debugkey");
                    console.log(token)
                    return res.status(201).json({code:201, message :  token });
                }
            return res.status(200).json({code:200, message:"error datos erroneos"});

          }).catch(error => {
            console.log("Error status code: " + error.status);
            console.log("Error status text: " + error.statusText);
            console.log("Error message:     " + error.message);
            console.log("Error details:     " + error.body)
          });

    }
    else {
        return res.status(200).json({code:200, message:"error datos erroneos"});
    }
    

});
module.exports=user;