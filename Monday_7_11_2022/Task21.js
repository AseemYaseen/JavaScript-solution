function randomBetweenNumbers(num1, num2) {

  x = Math.random() * (num1 - num2) +num2;
  
  x = Math.floor(x)

  console.log(x)


}


randomBetweenNumbers(prompt(`enter the big number`) , prompt(`enter the small number`));