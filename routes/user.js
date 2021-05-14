const express = require('express');
const user =express.Router();
/*const poop = require('../pokedex.json').pokemon;*/
const db =require("../config/database");
const pokemon = require('./pokemon');
const jwt = require('jsonwebtoken');

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
    const query = `SELECT * FROM user WHERE user_mail ='${user_mail}' AND user_password ='${user_password}';`;

    if(user_mail && user_password){    
    const rows= await db.query(query);
    console.log(rows)
    if (rows.length==1){
        const token = jwt.sign({
            user_id:rows[0].user_id,
            user_mail:rows[0].user_mail
        },"debugkey");
        console.log(token)
        return res.status(201).json({code:201, message :  token });

    }
    else {
        return res.status(200).json({code:200, message:"error datos erroneos"});
    }
    
}
});
module.exports=user;