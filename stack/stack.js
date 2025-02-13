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
