// 1. Find an Element in an Unsorted Array

function linearSearch(arr,target){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            return `Element found at index ${i}`
        }
    }   
    return 'Element not found'
}
const arr = [1,2,3,4,5]
console.log(linearSearch(arr,0))
console.log(linearSearch(arr,1))

// 2. Check if an Element Exists in an Array
function containsElement(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return true; 
        }
    }
    return false; 
}

// const arr = [9, 10, 11, 40, 50];
console.log(containsElement(arr, 11)); 