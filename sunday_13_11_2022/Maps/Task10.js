 
   function extractFullName(arr){
      let y = arr.map(function(element){
        return `${element.first} ${element.last}`
      })
      return y
   }

   let x =[{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]

   console.log(extractFullName(x));
