function middleOfArray (array) {

     if ( array.length % 2 == 0){
        
        return array.splice(array.length/2 - 1 , array.length/2 )
      }
      else {
         return array[Math.floor(array.length/2)]
     }
    }
    
   console.log(middleOfArray(["t","u","x"]));
    