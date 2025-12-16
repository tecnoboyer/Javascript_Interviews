// input [[1,4],[3,7],[9,12],[13,20]]
// output [[1,7],[9,12],[13,20]]
// Assuming that intervals overlap only in the second one,
// then the previos all times start earlier

const input = [[1,4],[3,7],[8,12],[13,20]]; 
const array=[];
let min=input[0][0];
let max=input[0][1]; 

input.forEach(element=>{
    // console.dir(element);
    if (max<element[0]){
        array.push([element[0],element[1]])
    }else {
        let overlap =array.pop();
        array.push([min,element[1]]);
    }
    
}
    

)

console.dir(array);