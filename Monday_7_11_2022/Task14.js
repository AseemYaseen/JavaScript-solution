function longerString (a , b , c , d ) {

    if  (a.length > b.length && a.length > c.length && a.length >  d.length ) {
    
        console.log(a)
    }
    
    else if (b.length > a.length && b.length > c.length && b.length > d.length ){
        console.log (b)
    }
    else if (c.length > a.length && c.length > b.length && c.length > d.length ){
        console.log (c)
    }
    
    else {console.log(d)}
    
}

longerString( prompt() , prompt() , prompt() , prompt())