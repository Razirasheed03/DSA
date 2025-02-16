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
