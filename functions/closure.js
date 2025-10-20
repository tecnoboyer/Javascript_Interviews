let addfunc = function(x) {
    let innerfunc = function(y) {
        return x + y;
    };
    return innerfunc;
}   
let add5 = addfunc(5)(3);
console.log(add5);
