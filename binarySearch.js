

// 2. Find the Leftmost Index of a Target in a Sorted Array
// function leftmostBinarySearch(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;
//     let result = -1;

//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);
        
//         if (arr[mid] === target) {
//             result = mid;  // Update result when element is found
//             right = mid - 1;  // Move left to find the leftmost index
//         } else if (arr[mid] < target) {
//             left = mid + 1;
//         } else {
//             right = mid - 1;
//         }
//     }

//     return result;
// }

// const arr = [1, 2, 3, 3, 3, 4, 5];
// console.log(leftmostBinarySearch(arr, 3));  



// 3. Find the First Element Greater Than a Target
// function firstGreaterThan(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;
//     let result = -1;

//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);
        
//         if (arr[mid] > target) {
//             result = arr[mid];  // Update result with the current element
//             right = mid - 1;  // Move left to check for earlier elements
//         } else {
//             left = mid + 1;
//         }
//     }

//     return result;
// }

// const arr = [1, 3, 5, 7, 9, 11];
// console.log(firstGreaterThan(arr, 6));



// function binarySearch(arr,target){
//     let left=0;
//     let right=arr.length-1;
//     while(left<=right){
//         let mid=Math.floor((left+right)/2)
//         if(arr[mid]===target){
//             return mid
//         }else if(arr[mid]<target){
//             return left=mid+1
//         }else{
//            return right=mid-1
//         }
//     }
//     return null
// }
// console.log('index of target is',binarySearch([1,2,3,4,5,6,7,8],5))

// function binaryRecursion(arr,target,left=0,right=arr.length-1){
//     if(left>right){
//         return null
//     }
//     let mid=Math.floor((left+right)/2)
//     if(arr[mid]===target){
//         return mid
//     }
//     else if(arr[mid]<target){
//         return binaryRecursion(arr,target,mid+1,right)
//     }else{
//         return binaryRecursion(arr,target,left,mid-1)
//     }
// }
// console.log(binaryRecursion([1,2,3,4,5,6,7],5))



// function binaryRecursion(arr,target,left=0,right=arr.length-1){
//     if(left>right){
//         return null
//     }
//     let mid=Math.floor((left+right)/2)
//     if(arr[mid]===target){
//         return mid
//     }else if(arr[mid]<target){
//         return binaryRecursion(arr,target,mid+1,right)
//     }else{
//         return binaryRecursion(arr,target,left,mid-1)
//     }

// }
// console.log(binaryRecursion([1,2,3,4,5,6,7],2))


// function binarySearch(arr,target){
//     let left=0;
//     let right=arr.length-1;
//     while(left<=right){
//      let mid=Math.floor((left+right)/2)
//     if(arr[mid]===target){
//         return mid
//     }
//     else if(arr[mid]<target){
//         left=mid+1
//     }else{
//         right=mid-1
//     }
// }
// return -1
// }
// console.log(binarySearch([1,2,3,4,5,6,7,8],1))