
function addKeyAndValue(arr, key, value) {
  let y = arr.map(function (element){
    element[key] = value;
    return element
  })
  return y
}


console.log(addKeyAndValue(arrayOfObj, 'title' , 'instructor'));


const addKeyAndValue = (arr, key, value) => arr.map(element => {
  element[key] = value;
  return element
})

console.log(addKeyAndValue(arrayOfObj, 'title' , 'instructor'));