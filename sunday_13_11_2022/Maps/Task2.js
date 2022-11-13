
//    * Take an array of numbers and make them strings
//    *
//    * Test Case: 
//    *
//    * console.log(stringItUp([2, 5, 100]));
//    * 
//    * Result:
//    * ["2", "5", "100"]

let arr= [2, 5, 100]

let func = arr.map((value)=>value.toString())

console.log(func)