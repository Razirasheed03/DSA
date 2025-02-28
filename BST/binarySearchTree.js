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
}
const bist = new bst()
bist.insert(10)
bist.insert(20)
bist.insert(30)
// bist.inOrder(bist.root);
