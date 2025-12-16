// input [[1,4],[3,7],[9,12],[13,20]]
// output [[1,7],[9,12],[13,20]]
// Assuming that intervals overlap only in the second one,
// then the previos all times start earlier

const input = [[1,4],[3,7],[9,12],[13,20]]; 
const array=[];
let min=element[0];
let max=element[1]; 

input.forEach(element=>{
    // console.dir(element);
    if (max>element[0]){
        min=element[0];
    }

    if(element[1]>max){
        max=element[1];
        array.push([min,max])
    }else {
        console.log('case');
        // let overlap =array.pop();
        // console.dir(overlap);
        // array.push([min,element[1]])
    }
    
}
    

)

// console.dir(array);