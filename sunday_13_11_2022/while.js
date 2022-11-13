// Create a function called subtract
// that takes a single parameter n,
// and return the subtraction of all
// starting from n to 0
// Ex: subtract(2); => 2 - 1 - 0 => 1
// Ex: subtract(5); => 5 - 4 - 3 - 2 - 1 - 0 => -5
// Ex: subtract(9); => 9 - 8 - 7 - 6 - 5 - 4 - 3 - 2 - 1 - 0 => -27


function subtract (n) {

let result =n;
let i=n-1;


while (i >= 0 ){
    result -= i; //resault=1//5/1/5/1
    i--;//3
}


return result

}

console.log(subtract(10));