let addfunc = function(x) {
    let innerfunc = function(y) {
        return x + y;
    };
    return innerfunc;
}   
let add5 = addfunc(5)(3);

let subtractfunc = function(a) {
    let innerSubtract = function(b) {
        return a - b;
    }; 
    return innerSubtract;
}    


export {addfunc,subtractfunc}