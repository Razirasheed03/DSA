// function factorial(n) {
//     if (n === 0 || n === 1) {
//       return 1;
//     } else {
//       return n * factorial(n - 1);
//     }
//   }
//   const resultFactorial = factorial(5);
//   console.log(`Factorial of 5 is: ${resultFactorial}`);


//   //==============Recursive Binary Search===============//
  
//   function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
//     if (left > right) {
//       return null; // base case: target not found
//     }
  
//     let mid = Math.floor((left + right) / 2);
  
//     if (arr[mid] === target) {
//       return mid; // target found
//     } else if (arr[mid] < target) {
//       // search in right half
//       return binarySearchRecursive(arr, target, mid + 1, right);
//     } else {
//       // search in left half
//       return binarySearchRecursive(arr, target, left, mid - 1);
//     }
//   }
  
  
//   console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10));
//   console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 6));
//   console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 20));
  

//   ////====recursive fibinocci======/////
  
//   function recFeb(n) {
//     if (n < 2) {
//       return n;
//     }
//     return recFeb(n - 1) + recFeb(n - 2);
//   }
//   console.log(recFeb(8));
  

//   ///////===========string reverse using recursion=========////////////

// function reverseStr(str){
//   if(str==='')return ''
//   return reverseStr(str.slice(1))+str[0]
// }
// console.log(reverseStr('hello'))


//////////=========sum of array using recursion ============////////

function recSum(arr){
  if(arr.length){
    return arr[0]+recSum(arr.slice(1))
  }else{
    return 0
  }
}
console.log(recSum([1,2,3,4,5]))