const express = require('express');
const user =express.Router();
/*const poop = require('../pokedex.json').pokemon;*/
const db =require("../config/database");
const jwt = require('jsonwebtoken');
const service = require('../config/cloudant')

user.post("/signin",async(req,res,next)=>{
    const{user_name, user_mail, user_password}=req.body
    if (user_name && user_mail && user_password ){
    let query= "INSERT INTO user( user_name, user_mail, user_password) ";
    query += `VALUES ('${user_name}','${user_mail}','${user_password}')`;
    const rows = await db.query(query);

    if (rows.affectedRows==1){
        return res.status(201).json({code:201, message : " user added done "});
    }
    return res.status(505).json({code:505, message:"error some times i rip the skin"});

}
return res.status(501).json({code:501, message:"error datos incompletos "});
});

user.get("/",async(req,res,next)=>{

    const query= "SELECT * FROM user"
    const rows = await db.query(query);
    return res.status(201).json({code:201, message : rows});

});

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