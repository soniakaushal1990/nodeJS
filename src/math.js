const calculatetip = (total,tipPercent =.25) => total+(total* tipPercent);
const farenheittoCelsius = (temp)=>{
  return (temp-32)/1.8  
}
const celsiustoFarenheit = (temp)=>{
 return (temp*1.8)+32
}
const add = (a, b) => {
    return new Promise((resolve,reject) => {     
          resolve(a+b);
    })
}

module.exports = {
    calculatetip,
    farenheittoCelsius,
    celsiustoFarenheit,
    add
}