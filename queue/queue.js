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