const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const nodemon = require('nodemon');
const PORT=3000;
const app = express();


app.get('/',(_req,res) =>{
    res.status(200).send("Signup Endpoint");
})

app.post('/',(req,res) =>{
    const Username =req.body;
    const Email = req.body;

    if(!Username) {
        res.status(400).json({msg:"Username cannot be empty"});

    }
    
    if(!Email) {
        res.status(400).json({msg:"Email cannot be empty"});
    }

    const b = (Password) => {
        if (b<8 || b>16) res.status(404);
            return("Password Should be greater than 8 or equal to 6")
    }
})

app.listen(process.env);{
    console.log(`Succesfully connected to ${PORT}`);
}