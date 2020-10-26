const express = require('express');
const httperrors = require('http-errors');
const bodyparser =require('body-parser');
const port = 3000;
const app = express();

//parse application/x-www-form-urlencoded

app.use(bodyparser.urlencoded({extended:false}));


//parse application/json

app.use(bodyparser.json());





/*

Start the server at Port 3000

*/

app.listen(port,function(){
    console.log(`App listening at port ${port}`);
})

