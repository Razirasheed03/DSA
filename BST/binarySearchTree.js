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
    delete(value) {
        this.root = this.deleteNode(this.root, value);
    }
    min(root) {
        if (!root.left) {
            return root.value;
        } else {
            return this.min(root.left)
        }
    }

    deleteNode(root, value) {
        if (!root) {
            return root
        }
        if (value < root.value) {
            root.left = this.deleteNode(root.left, value)
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value)
        } else {
            if (!root) {
                return root
            }
            if (!root.left && !root.right) {
                return null
            } else {
                if (!root.left) {
                    return root.right
                } else if (!root.right) {
                    return root.left
                }
                root.value = this.min(root.right, value)
                root.right = this.deleteNode(root.right, root.value)
            }
        }
        return root
    }
    search(root, value) {
        if (!root) {
            return false;
        } else {
            if (root.value === value) {
                return true;
            } else if (root.value > value) {
                return this.search(root.left, value);
            } else {
                return this.search(root.right, value);
            }
        }
    }

    isBST(root, min = -Infinity, max = Infinity) {
        if (!root) {
            return true;
        }
        if (root.value >= max || root.value <= min) {
            return false;
        }
        return (this.isBST(root.left, min, root.value) && this.isBST(root.right, root.value))
    }

    findClosest(target) {
        let curr = this.root;
        let closest = this.root.value;
        while (curr) {
            if (Math.abs(target - curr.value) < Math.abs(target - closest)) {
                closest = curr.value;
            }
            if (target < curr.value) {
                curr = curr.left;
            } else if (target > curr.value) {
                curr = curr.right;
            } else {
                return
            }
        }
        return closest;
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
