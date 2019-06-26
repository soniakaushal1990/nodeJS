

var express = require('express');
var app = express();
var mongoose = require('mongoose');
const userRouter = require('./routes/user');
var context = require('./context/context');
//how application level middle ware works
app.use((req,res,next)=>{
  //console.log(date.now);
  req.name = "Sonia Kaushal";
  next();
});
app.get('/',(req,res)=>{
  res.send("Index Router is working");
});
app.use('/users',userRouter);
context.initialize();




/*
Start the server on PORT 5000 
*/
const port = 5000;
app.listen(port,function(){
    console.log("Server started on port "+port);
});