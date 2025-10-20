let array = [5, 12, 8, 130, 44];
 let foundfunction = function(element){ return element > 10 };
 let found = array.find(foundfunction);
 try{
    console.log(found); 
 } catch(e){
    console.log(e);
 }
 