class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null
    }
}
class bst {
    constructor() { 
        this.root = null
    }
    insert(value) {
        const newNode = new Node(value)
        if (this.root === null) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }
    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode
            } else {
                this.insertNode(root.left, newNode)
            }

        } else {
            if (root.right === null) {
                root.right = newNode
            } else {
                this.insertNode(root.right, newNode)
            }
        }
    }
    levelOrder() {
        const queue = [];
        queue.push(this.root);
        while (queue.length) {
            let curr = queue.shift();
            console.log(curr.value)
            if (curr.left) {
                queue.push(curr.left);
            }
            if (curr.right) {
                queue.push(curr.right)
            }
        }
    }
    preOder(root) {
        if (root !== null) {
            console.log(root.value)
            this.preOder(root.left)
            this.preOder(root.right)
        }
    }
    inOrder(root) {
        if (root !== null) {
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }
    postOrder(root) {
        if (root !== null) {
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }
}
const bist = new bst()
bist.insert(10)
bist.insert(20)
bist.insert(30)
// bist.inOrder(bist.root);
