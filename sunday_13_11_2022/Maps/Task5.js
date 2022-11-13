// Make an array of strings of the names saying whether or not they can go to The Matrix
   
//     Test Case: 


function makeStrings(arr){
    let result = arr.map((x) => {

        if (x.age >=18) {
            return x.name+` can go to The Matrix`
        }
        else {
            return x.name+`is under age!!`
        }
    } 
   )
   return result 
  } 
    console.log(makeStrings([
       {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
    ]));  

// Result:
// * 
// * ["Angelina Jolie can go to The Matrix", 
// * "Eric Jones is under age!!", 
// * "Paris Hilton is under age!!", 
// * "Kayne West is under age!!", 
// * "Bob Ziroll can go to The Matrix"]
// *  ["John", "Jacob", "Jingleheimer", "Schmidt"]
// */





  
  