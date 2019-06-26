first(2,function(firstresult,err){
    if(!err){
        second(firstresult,function(secondresult,err){
            if(!err){
                third(secondresult,function(thirdresult,err){
                    if(!err){
                        console.log(thirdresult);
                    }
                })
            }
        })
    }
})


//In the code above first function will be called with 2  and will return the callback fuction with value 4 
//if there are no errors then second function will be called and so on.
//in this case each function will wait for the first one to complete then the second function will execute.
//which will be time consuming 


function first(value,callback){
  callback(value+2,false);
}
function second(value,callback){
  callback(value+2,false);

}
function third(value,callback){
    callback(value+2,false);
}