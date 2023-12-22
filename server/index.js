const express = require ('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app= express();
const mysql= require('mysql');
const db= mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'menucraft',
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))

app.post("/api/insert", (req, res)=>{


    const name=req.body.name
    const pass=req.body.password
     //const s="INSERT INTO user(name,password,isAdmin) VALUES (?,?,0);"
     const s="INSERT INTO user(name,password,isAdmin) VALUES (?,?,0);"
     db.query(s,[name, pass],(err,result)=>{
    //     res.send("challita seddou");
    console.log(result);
     });
});
app.listen(3001, ()=>{
    console.log("hello");
});