function mergedSort(array) {
    if (array.length < 2) {
      return array;
    }
    let mid = Math.floor(array.length / 2)
    let leftArray = array.slice(0, mid);
    let rightArray = array.slice(mid);
    return join(mergedSort(leftArray), mergedSort(rightArray));
  }
  
  function join(leftArray, rightArray) {
    let newArray = [];
    let i = 0;
    let j = 0;
  
    while (i < leftArray.length && j < rightArray.length) {
      if (leftArray[i] < rightArray[j]) {
        newArray.push(leftArray[i++]);
      } else {
        newArray.push(rightArray[j++]);
      }
    }
    while (i < leftArray.length) {
      newArray.push(leftArray[i++]);
    }
    while (j < rightArray.length) {
      newArray.push(rightArray[j++]);
    }
  
    return newArray;
  }
  