function onlyEvenValues(arr){
   let newArray = []
   let y = arr.forEach(element => { 
   element % 2 == 0 ? newArray.push(element) : element
    
   });
   console.log(newArray);
   
}
onlyEvenValues([5,1,2,3,10])

