function bubbleSort(array) {
    // var array2 =set new Array(...array);
    var swapped;
    for( let i = 0; i < array.length; i++ ) {
        for( let j = 0; j < array.length-1  ; j++ ) {
            if( array[j] > array[j+1] ) {
                swapped = array[j];
                array[j] = array[j+1];
                array[j+1] = swapped;
                console.log(`i:${i} , j: ${j}  : ${array}`);
            }   


        }
    }
    // Only change code below this line
    return array;
    // Only change code above this line
}

console.log(bubbleSort([9,8,2,2,7]));