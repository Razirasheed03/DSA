class binaryTree{
    constructor(value){
        this.value=value
        this.left=null;
        this.right=null
    }
}
const root=new binaryTree('A')
const nodeA=new binaryTree('a')
const nodeB=new binaryTree('b')

root.left=nodeA
root.right=nodeB
console.log(root)