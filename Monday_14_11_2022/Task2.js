document.getElementById("login").onclick = function(){
    event.preventDefault()
    if (
    document.getElementById("theEmail").value == localStorage.getItem("theEmail")  && 
    document.getElementById("thePass").value ==  localStorage.getItem("thePass") 
    )  {
        document.getElementById("result")
    }
    }