 let vowelAlpha = ["a", "e", "i", "o", "u"]

function vowelCount(str){
  
  let arr = str.toLowerCase().split("")
  let a = 1;
  let e = 1;
  let i = 1;
  let o = 1;
  let u = 1;
  let vowelA = {};
  let vowelE = {};
  let vowelI = {};
  let vowelO = {};
  let vowelU = {};

  for(x=0 ; x < arr.length ; x++){
    if ( arr[x] == 'a'){
      vowelA.a = a++;
    } else if ( arr[x] == 'e'){
      vowelE.e = e++;
    } else if ( arr[x] == 'i'){
      vowelI.i = i++;
    } else if ( arr[x] == 'o'){
      vowelO.o = o++;
    } else if ( arr[x] == 'u'){
      vowelU.u = u++;
    } else {
      continue
    }
  }
  Object.assign(vowelA, vowelE);
  Object.assign(vowelA, vowelI);
  Object.assign(vowelA, vowelO);
  Object.assign(vowelA, vowelU);
  console.log(vowelA);
}

vowelCount('I Am awesome and so are you');