
function middleOfArray (array1) {
   
   if(array1.length %2 == 0){

      return array1.splice(Math.floor((array1.length-1)/2) , array1.length/2)

   }

   else {
      return array1[(array1.length-1)/2]
             
   }


}

console.log(middleOfArray(["t","u","g","x"]))
console.log(middleOfArray([1,4,5]))