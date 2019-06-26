const express = require('express');
const router = express.Router();
const context = require('../context/context');
//First router
router.get('/',function(req,res)
{
    console.log(req.name);
    context.put("principal");
    console.log(context.get());
    console.log(context.get())
    res.send("Hello-world");
});


router.post('/create');

function validateRequest(feature){
    var middleware = function (req,res, next) {
       console.log(fields);
    }
    return middleware;
}
module.exports = router;