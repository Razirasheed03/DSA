class stack{
    constructor(){
        this.items=[]
    }
    push(element){
        this.items.push(element)
    }
    pop() {
         this.items.pop();
    }
    peek(){
        return this.items[this.items.length-1]
    } printStack(){
        if(this.items.length==0){
            console.log('empty')
        }else{
            console.log(this.items.join(' '))
        }}}
const stacknew=new stack()
stacknew.push(10)
stacknew.push(30)
console.log(stacknew.peek())
stacknew.printStack()


/////////stack using linked list
class Node{
    constructor(value){
        this.value=value;
        this.next=null
    }
    }
    class Stack{
        constructor(){
            this.top=null;
            this.size=0
        }
        push(element){
            const newNode=new Node(element)
            if(this.top){
                newNode.next=this.top
            }
            this.top=newNode
        }
        pop(){
            this.top=this.top.next
        }
        display(){
            let curr=this.top
            let listValue='';
            while(curr){
                listValue+=curr.value;
                curr=curr.next
            }
                console.log(listValue)
        }
    }
    
    
    const stack=new Stack()
    stack.push(10)
    stack.push(20)
    stack.pop()
    stack.display()
    