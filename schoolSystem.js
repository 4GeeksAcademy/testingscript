/*
function someNames(firstName, lastName){
  let results = `Hello, my first name is ${firstName.length} and my last name is ${lastName}`
  let a = 1
  let b = 2
  return a + b
}

const func = (Input) => Input *5;

*/

let narNumber = 8208

function calcFunc(narNumb){
  let numStr = narNumb.toString()
  let power = numStr.length
  let splitString = numStr.split("");

  let myArray = splitString.map(element => parseInt(element))
  let finalNumber = myArray.map(element => element ** power)

  let sum = 0
  for(let i = 0; i < myArray.length; i = i +1){
    sum = sum + finalNumber[i];
  }

  if(sum == narNumb){
    return "Narcisistic"
  }else{
    return "Non-Narcisistic"
  }

  
}


console.log(calcFunc(narNumber));