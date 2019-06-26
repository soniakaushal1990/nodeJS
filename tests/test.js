
const {calculatetip,farenheittoCelsius,celsiustoFarenheit,add} = require('../src/math');


test('Should calculate total with tip',() =>{
  const total = calculatetip(10,.3);
  expect(total).toBe(13);
  
});

test('Should calculate total with default tip',()=>{
  const total = calculatetip(10);
  expect(total).toBe(12.5);
});

test('Should convert 32 F to 0 C',()=>{
    const celcius =  farenheittoCelsius(32);
    expect(celcius).toBe(0);
});

test('Should convert 0 C to 32 F',()=>{
    const farenheit =  celsiustoFarenheit(0);
    expect(farenheit).toBe(32);
});
//Test asynchronous code  Way 1
test('Should calulate sum of two numbers',(done)=>{
  add(2,3).then((sum)=>{
    expect(sum).toBe(5);
    done();
  })

})

//Test asynchronous code  Way 2
test('Should calulate sum of two numbers async await',async()=>{
   const sum = await add(2,3);
   expect(sum).toBe(5);
  
})







