function quickSort(array) {
    while (array.length < 2) {
        return array;
    }
    let pivot = array[0];
    let leftArray = [];
    let rightArray = [];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < pivot) {
            leftArray.push(array[i]);
        } else {
            rightArray.push(array[i]);
        }
    }
    return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
}
console.log(quickSort([1, 6, -2, 5, 3]))