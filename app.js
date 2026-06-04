const express  = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("<h1>Hello</h1>");
})

app.listen(3000,(req,res)=>{
    console.log(`Server listening on http://loalhost:3000`);
})

