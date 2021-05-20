const express = require('express');
const admin =express.Router();
const service = require('../config/cloudant')

admin.post("/",async (req,res , next)=>{
    const { nombre , apellido , correo , direccion}=req.body;
    if (nombre && apellido && correo && direccion){
        const productsDoc = {
            
            nombre: nombre,
            apellido: apellido,
            correo: correo,
            direccion: direccion
           
          };
          
          service.postDocument({
            db: 'user',
            document: productsDoc
          }).then(response => {
            console.log(response.result);
            return res.status(400).json({mensage:'oki data uploaded'})
          }).catch(error => {
            console.log("Error status code: " + error.status);
            console.log("Error status text: " + error.statusText);
            console.log("Error message:     " + error.message);
            console.log("Error details:     " + error.body)
          });
    }
    else{ 
        return res.status(400).json({mensage:'missing data'})
    }
});


admin.post("/find",async (req ,res, next)=>{
const {nombre}= req.body;
    if(nombre)
    {
        const selector = {
        "nombre": {
           "$eq": nombre
        }
     };
      
     
      service.postFind({
        db: 'user',
        selector: selector,
        fields: ['_id', 'type', 'nombre', 'apellido', 'correo', 'direccion'],
        
        limit: 100
      }).then(response => {
        console.log(response.result);
        return res.status(200).json(response.result);
      }).catch(error => {
        console.log("Error status code: " + error.status);
        console.log("Error status code: " + error.status);
        console.log("Error message:     " + error.message);
        console.log("Error details:     " + error.body)
        return res.status(400).json({Error_status_code: error.status, Error_message: error.status,Error_details:error.body})
      });
    }
    else
    {
        return res.status(400).json({mensage:"no data submited"})   
    }
});

admin.delete("/",async (req ,res, next)=>{

const {docId,rev}=req.body;

    service.deleteDocument({
        db: 'user',
        docId: docId,
        rev: rev
      }).then(response => {
        console.log(response.result);
        return res.status(200).json(response.result);
      }).catch(error => {
        console.log("Error status code: " + error.status);
        console.log("Error status code: " + error.status);
        console.log("Error message:     " + error.message);
        console.log("Error details:     " + error.body)
        return res.status(400).json({Error_status_code: error.status, Error_message: error.status,Error_details:error.body})
      });

});


admin.put("/",async (req,res , next)=>{
    const {_id, nombre , apellido , correo , direccion}=req.body;
    if (nombre && apellido && correo && direccion,_id){
        const productsDoc = {
            _id: _id,
            nombre: nombre,
            apellido: apellido,
            correo: correo,
            direccion: direccion
           
          };
          
          service.postDocument({
            db: 'user',
            document: productsDoc
          }).then(response => {
            console.log(response.result);
            return res.status(400).json({mensage:'oki data uploaded'})
          }).catch(error => {
            console.log("Error status code: " + error.status);
            console.log("Error status text: " + error.statusText);
            console.log("Error message:     " + error.message);
            console.log("Error details:     " + error.body)
          });
    }
    else{ 
        return res.status(400).json({mensage:'missing data'})
    }
});

module.exports=admin;