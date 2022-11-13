
let first = document.querySelector('div')

first.style.cssText =`border: 2px solid black;
background-color:blue;
width:600px;
height:600px;
text-align:center;
`
first.addEventListener(`mouseover` ,function(){
    document.querySelector('div').style.background=`green`;
})
first.addEventListener(`mouseout` , function(){
    document.querySelector(`div`).style.background=`yellow`
})

