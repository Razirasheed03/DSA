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

