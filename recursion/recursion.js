function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  const resultFactorial = factorial(5);
  console.log(`Factorial of 5 is: ${resultFactorial}`);


  //==============Recursive Binary Search===============//
  
function recursiveBinarySearch(array, target) {
    return search(array, target, 0, array.length - 1);
  }
  function search(array, target, leftIndex, rightIndex) {
    if (leftIndex > rightIndex) {
      return -1;
    }
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target === array[middleIndex]) {
      return middleIndex;
    }
    if (target < array[middleIndex]) {
      return search(array, target, leftIndex, middleIndex - 1);
    } else {
      return search(array, target, middleIndex + 1, rightIndex);
    }
  }
  
  console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10));
  console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 6));
  console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 20));
  