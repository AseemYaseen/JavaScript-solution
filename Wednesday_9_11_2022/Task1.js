let first = document.querySelector('h1')

first.style.cssText =`border: 2px solid black;
background-color:blue;
width:400px;
text-align:center;
`
first.addEventListener(`mouseover` ,function(){
    document.querySelector('h1').style.background=`red`;
})
first.addEventListener(`mouseout` , function(){
    document.querySelector(`h1`).style.background=`blue`
})



