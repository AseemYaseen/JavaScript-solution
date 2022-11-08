function middleOfArray (array1) {

     if ( array1.length % 2 === 0){
        
      console.log(array1.splice((array1.length-1)/2 , array1.length/2 ))
      }
      else {
         console.log(array1[((array1.length-1)/2)])
     }
    }
middleOfArray([1,4,5])
middleOfArray(["t","u","g","x"])
    