function scoreInUniversty (mark) {

    if (mark <=100 && mark >=95) {
        console.log(`A`)
    }
    else if (mark <=94 && mark >=85 ) {
        console.log (`B`)
    }
    else if (mark <=84 && mark >=70 ) {
        console.log (`C`)
    }
    else if (mark <=69 && mark >=50 ) {
        console.log (`D`)
    }
    else if (mark <=49 && mark >=0 ) {
        console.log (`F`)
    }
    else {console.log(`Wrong entry`)}
}

scoreInUniversty(prompt(`Enter Your mark`))