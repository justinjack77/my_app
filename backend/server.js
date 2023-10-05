// import "confi.js"

const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const PORT = 5000;
const myADataBase = "mydb";


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: myADataBase
});


const app = express();
app.use(cors());

app.get("/",(req,res)=>{
    return res.json("From BackEnd Side....");
});

app.get("/users", (req,res)=>{
    const sql = "select * from users";
    db.query(sql,(err,data)=>{
        if(err){
            return res.json(err);
        }
        return res.json(data);
    });
});

app.listen(PORT,()=>{
    console.log(`Listing from backend port: ${PORT}`)
})