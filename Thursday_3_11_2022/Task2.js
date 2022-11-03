
let c = window.prompt('enter a operation')
let a = window.prompt('enter number1')
let b = window.prompt('enter number2')


if (c == '+') {
    document.write(a,c,b);
    console.log(Number (a) + Number(b));

}

else if (c == '-') {

    document.write(a,c,b);
    console.log(Number (a)- Number(b));
}


else if (c == '*') {

    document.write(a,c,b);
    console.log(Number (a) * Number (b));

}
else if (c == '/') {

    document.write(a,c,b);
    console.log(Number (a) / Number (b))

}



