function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        [arr[i], arr[min]] = [arr[min], arr[i]]
    }
    return arr
}
console.log(selectionSort([-4, 1, 2, 33, 4, 2]))