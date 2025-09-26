
// Step-by-Step Breakdown
// Initialize the Subsets: The process begins by establishing two subsets within the array: one sorted and one unsorted. Initially, the sorted subset is empty, and the entire array constitutes the unsorted subset.

// Iterate Through the Unsorted Part: A main loop iterates through the entire array, with a pointer marking the boundary between the sorted and unsorted subsets. At each iteration, this pointer is the starting element of the current unsorted portion.

// Find the Minimum Value: Within the unsorted subset (which starts at the current loop index), the algorithm scans for the element with the minimum value.

// Swap the Elements: Once the minimum value is found, it is swapped with the element at the current loop index. This moves the smallest element from the unsorted portion into its correct position within the sorted subset.

// Advance the Boundary: The loop then moves to the next element, advancing the boundary between the sorted and unsorted subsets. The process is repeated until the entire array is sorted.

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
