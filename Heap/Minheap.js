class MinHeap {
    constructor() {
        this.heap = []
    }
    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }
    getLeftIndex(index) {
        return 2 * index + 1;
    }
    getRightIndex(index) {
        return 2 * index + 2;
    }
    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }
    // In insertion we need both insert and heapifyUp.
    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = this.getParentIndex(index);
            if (this.heap[parentIndex] > this.heap[index]) {
                this.swap(parentIndex, index);
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    peek() {
        return this.heap.length > 0 ? this.heap[0] : null
    }

}

const heap = new MinHeap();
heap.insert(10);
heap.insert(9);
heap.insert(12);
heap.insert(8);
heap.insert(2);
console.log(heap.heap);
console.log(heap.peek());
// console.log(heap.extractMin());
console.log(heap.peek());