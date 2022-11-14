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

// document.getElementById("butn").onclick = function(){
//     localStorage.setItem("theEmail" , document.getElementById("theEmail").value)
//     localStorage.setItem("thePass" , document.getElementById("thePass").value)
//     event.preventDefault()}
//     window.location.href="./log_in.html";}

// localStorage.clear()

function func(){

fir=document.getElementById("firstName").value;
las=document.getElementById("lastName").value;
em=document.getElementById("theEmail").value;
pas=document.getElementById("thePass").value;
pho=document.getElementById("phoneN").value;




    localStorage.setItem("firstName" ,fir);
    localStorage.setItem("lastName" ,las);
    localStorage.setItem("theEmail" ,em);
    localStorage.setItem("thePass" ,pas);
    localStorage.setItem("phoneN" ,pho);
   

}




function logFunc(){
    // document.getElementById("butn")82[510]

em1=document.getElementById("signEmai").value;
pas1=document.getElementById("signPass").value;

x = localStorage.getItem('theEmail')
y = localStorage.getItem('thePass')

if (x == em1 && y == pas1) {

    alert(`Sucess`)

}
else {
    alert(`Wrong pass or username`)

}

}