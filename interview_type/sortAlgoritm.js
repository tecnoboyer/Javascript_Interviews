function selectionSort(array) {
    for( let i = 0; i < array.length; i++ ) {
        let swapped;
        let minIndex = i;
        // LEts find the index of the minimum element
        for( let j = i+1; j < array.length  ; j++ ) {
            if( array[j] < array[minIndex] ) {
                minIndex = j;
            }
        }
        // Swap the minimum element with the first element
        swapped = array[i];
        array[i] = array[minIndex];
        array[minIndex] = swapped;
        console.log(`i:${i} , minIndex: ${minIndex}  : ${array}`);
    }

    // Only change code below this line
    return array;
    // Only change code above this line
}

selectionSort([9,8,2,2,7]);
