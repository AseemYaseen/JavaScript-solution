// Capitalize each of an array of names
//    *
//    * Test Case: 
//    *
//    * console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 
//    * 
//    * Result:
//    *  ["John", "Jacob", "Jingleheimer", "Schmidt"]
//   */
  
//   function capitalizeNames(arr){
    // your code here

    // let arr = ["john", "JACOB", "jinGleHeimer", "schmidt"]

    // let func = arr.map((value , a)=>value.toLowerCase())

    // console.log(func)


    let arr =["john", "JACOB", "jinGleHeimer", "schmidt"];

    let capitalizeNames = arr.map(function (element) {
    
        arr = element.toLowerCase();
        value = arr.substring(0, 1).toUpperCase() + arr.substring(1);
      return value;
    
    });
    console.log(capitalizeNames);
    
    
    
    

