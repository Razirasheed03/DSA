class Queue{
    constructor(){
        this.items=[]
    }
    push(element){
        this.items.push(element)
    }
    pop(){
        this.items.shift()
    }
    peek(){
        return this.items[0]
    }
    print(){
        console.log(this.items.join(' '))
    }
}
const queue=new Queue()
queue.push(10)
queue.push(20)




///////========queue using stack========//////

class queueUsingStack{
    constructor(){
        this.stack1=[];
        this.stack2=[]
    }
    push(value){
        this.stack1.push(value)
    }
    pop(){
        if(this.stack2.length===0){
            while(this.stack1.length>0){
                this.stack2.push(this.stack1.pop())
            }
        }
        return this.stack2.pop();
    }
    print(){
        console.log(this.stack2.join(' '))
    }
}

// const queue=new queueUsingStack()
// queue.push(10)
// queue.push(20)
// queue.pop()
// queue.print()


//////////===== queue using LinkedList======///////
class Node{
    constructor(value){
        this.value=value;
        this.next=null
    }
}
class Queue{
    constructor(){
        this.left=null
        this.right=null
        this.length=0
    }
    push(element){
        const newNode=new Node(element)
        if(this.length===0){
            this.left=newNode;
            this.right=newNode;
        }
        this.right.next=newNode;
        this.right=newNode;
        this.length++
    }
    pop(){
        this.left=this.left.next
        this.length--
    }
    print(){
        let curr=this.left
        let listValue=''
        while(curr){
            listValue+=curr.value+(' ')
            curr=curr.next
        }
        console.log(listValue)
    }
    
}
// const l=new Queue()
// l.push(10)
// l.push(20)
// l.pop()
// l.print()