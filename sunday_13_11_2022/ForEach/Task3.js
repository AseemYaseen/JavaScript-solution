
function showFirstAndLast(arr){
  let newArray = []
  let y = arr.forEach(element => {
    element.split("")
    let firstAndLast = element[0].concat(element[element.length-1])
    newArray.push(firstAndLast)
   });
   console.log(newArray);
}

showFirstAndLast(['colt','matt', 'tim', 'udemy'])