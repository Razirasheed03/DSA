function sumOfEven(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            sum += arr[i]
        }
    }
    return sum
}
console.log(sumOfEven([1, 2, 3, 4, 5, 6, 7, 8]))

function avgOfEven(arr) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            sum += arr[i]
            count++
        }
    }
    return sum / count
}


function reverseArr(arr) {
    let reverse = []
    for (let i = arr.length; i > 0; i--) {
        reverse.push(i)
    }
    return reverse
}
// console.log(reverseArr([1,2,3,4,5]))

function findLargest(arr) {
    let max = arr[0]
    for (let num of arr) {
        if (num > max) {
            max = num;
        }
    }
    return max
}
// console.log(findLargest([1,2,3,45,5,65,22]))

function removeDupe(arr) {
    let unique = []
    for (let num of arr) {
        if (!unique.includes(num)) {
            unique.push(num)
        }
    }
    return unique
}
// console.log(removeDupe([1,2,3,4,4,55,66,55,44,4,4]))

function findSecondLarget(arr) {
    let large = -Infinity;
    let Slarge = -Infinity;
    for (let num of arr) {
        if (num > large) {
            Slarge = large;
            large = num;
        } else if (Slarge < num && large !== num) {
            Slarge = num;
        }
    }
    return [Slarge, large]

}
// console.log(findSecondLarget([1,2,33,44,22,55,65]))

function FindthirdLargest(arr) {
    let largest = -Infinity
    let Secondlargest = -Infinity
    let Thirdlargest = -Infinity
    for (let num of arr) {
        if (num > largest) {
            Thirdlargest = Secondlargest
            Secondlargest = largest
            largest = num;
        } else if (num > Secondlargest && num !== largest) {
            Secondlargest = num
        } else if (num > Thirdlargest && num !== Secondlargest) {
            Thirdlargest = num
        }
    }
    return [largest, Secondlargest, Thirdlargest]
}

// console.log(FindthirdLargest([10,20,22,30,33,40,45]))

function check(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr.includes(target)) {
            return true
        } else {
            return false
        }
    }
}
// console.log(check([1,2,3,4,5],))

function countOccurence(arr, occ) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === occ) {
            count++
        }
    }
    return count
}
// console.log(countOccurence([1,2,3,4,5,5,6,6,5,4,5],5))

function removeDupe(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {

        if (!newArr.includes(arr[i])) {
            newArr.push(arr[i])
        }
    }
    return newArr
}
// console.log(removeDupe([1,2,2,3,4,5,5,4,3]))
function removeDupe(arr) {
    let newArr = new Set(arr)
    return newArr
}
// console.log(removeDupe([1,2,2,3,4,5,5]))

function kthLarge(arr, k) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[i]) {
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr[k - 1]
}
// console.log(kthLarge([1,2,3,4,5],1))

function findSecondLarget(arr) {
    let Slarge = -Infinity;
    let largest = -Infinity
    let Thirdlargest = -Infinity
    for (num of arr) {
        if (num > largest) {
            Thirdlargest = Slarge
            Slarge = largest
            largest = num
        } else if (Slarge < num && num !== largest) {
            Thirdlargest = Slarge
            Slarge = num
        } else if (Thirdlargest < num && num !== Slarge && num !== largest) {
            Thirdlargest = num
        }
    }
    return [Thirdlargest, Slarge, largest]
}
// console.log(findSecondLarget([1,22,22,3,4,5,5]))

function isPalidrom(str) {
    let left = 0
    let right = str.length - 1
    while (left < right) {
        if (str[left] === str[right]) {
            return true;
        }
        left++
        right--
    }
    return false
}
// console.log(isPalidrom('mada'))


let str = 'razi pp'
let result = str[0].toUpperCase()
for (let i = 1; i < str.length; i++) {
    result += str[i]
}
console.log(result)


//////////reversing without built in method

const arr=[1,2,3,4,5]

for(let i=0;i<arr.length/2;i++){
    let j=arr.length-1-i;
    [arr[i],arr[j]]=[arr[j],arr[i]]
}
console.log(arr)
