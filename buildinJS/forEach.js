let array = [5, 12, 8, 130, 44];

let  text = "";
let myfunction = function(element) {
    text += element 
};

array.forEach(myfunction);
try {
    console.log(text); 
} catch(e) {
    console.log('The error: '+e);
}   