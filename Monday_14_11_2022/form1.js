// localStorage.clear()
// localStorage.setItem(`Name` , `Asem` )
// let userName =[];
// function func (value) {

//     obj = {
//         "name" : userName,
//     }
// console.log("test");
//     sessionStorage.setItem("name",obj['name'] )

// }



// function func(){
//     console.log("Asem");
// }



// function setNamevalue(value) {
//     let nameValue = document.getElementById("firstName").value;
    


// }

document.getElementById("butn").onclick = function(){
    localStorage.setItem("theEmail" , document.getElementById("theEmail").value)
    localStorage.setItem("thePass" , document.getElementById("thePass").value)
    event.preventDefault()
    window.location.href="./log_in.html";}
    






