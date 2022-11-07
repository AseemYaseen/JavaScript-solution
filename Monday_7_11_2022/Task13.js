function shorterString (a , b , c , d , e) {

if (a.length < b.length && c.length && d.length && e.length) {

    console.log(a)
}

else if (b.length < a.length && c.length && d.length && e.length){
    console.log (b)
}
else if (c.length < a.length && b.length && d.length && e.length){
    console.log (c)
}
else if (d.length < a.length && b.length && c.length && e.length){
    console.log (d)
}

else {console.log(e)}


}

shorterString (prompt() , prompt() , prompt() , prompt () , prompt())
