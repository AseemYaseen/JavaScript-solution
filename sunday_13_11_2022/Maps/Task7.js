// Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
// *
// * Test Cases:
 doubleValues([1,2,3]) 
 doubleValues([1,-2,-3])  
// *
// * Result:
// * Test Case 1: [2,4,6] 
// * Test Case 2: [2,-4,-6]
// */

function doubleValues(arr){
    let result = arr.map(x =>

        x*2
        )
        return result
  }

  console.log((doubleValues([1,2,3])));
  console.log((doubleValues([1,-2,-3])));