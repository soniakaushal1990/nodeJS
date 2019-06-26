//variable

var obj = {

    type:"fruit",
    name:"apple"
};
// 

//Destructing in ES6 is all about reducing the amount of code you are using
//instead of var type = obj.type u can use the below code
const{type,name} = obj;
console.log(type);
console.log(name);


//Objects
var file = {
    name:"File1.txt",
    size:14040,
    extention:".jpeg"
}

// function fileSummary(file){
//  return `The file ${file.name} ${file.extention} is of size ${file.size}`;
// }

function fileSummary({name,size,extention}){
    return `The file ${name} ${extention} is of size ${size}`;
}
console.log(fileSummary(file));


//Arrays

const companies = [
    "Katerra",
    "KEF",
    "Google",
    "Uber"
]
//const firstcompany = companies[0];
const [firstcompany,secondcompany] =  companies;
console.log(secondcompany);




