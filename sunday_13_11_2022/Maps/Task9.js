   let x = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]

    function extractKey(arr, key){
       let y = arr.map( function (element){
        return element[key]
       });
       return y
    }
    
    console.log(extractKey(x , 'name'));
