function insertionSort(arr){
    for(let i=0;i<arr.length;i++){
        let temp=arr[i];
        j=i-1
        while(j>=0&&arr[j]>temp){
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1]=temp
    }
    return arr
}
console.log(insertionSort([2,-2,1,3]))