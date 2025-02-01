class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail=null;
  }

insert(data,index){
  if(index<0){
    console.log('invalid index')
  }else if(index===0){
    this.shaheer(nd)
  }else{
    const newNode=new Node(data)
    let curr=this.head
    for(let i=0;i<index-1;i++){
      curr=curr.next
    }
    newNode.next=curr.next;
    curr.next=newNode
  }

}

midOf(){
  let slow = this.head;
  let fast = this.head;
  while(fast && fast.next){
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow.value;
}

addtoBack(data){
  const newNode=new Node(data)
  
  if(this.head===null){
    this.head=newNode
    this.tail=newNode
  }else{
   this.tail.next=newNode
   this.tail=newNode
   
}
}



append(data){
  const node=new Node(data)
  if(this.head===null){
    this.head=node
  }else{
    let curr=this.head
    while(curr.next){
      curr=curr.next
    }
    curr.next=node
  }
}




insert(data,index){
  if(index<0){
    console.log('invalid')
  }else if(index===0){
    this.append(data)
  }
  else{
    const newNode=new Node(data)
    let curr=this.head;
    for(let i=0;i<index-1;i++){
      curr=curr.next
    }
    newNode.next=curr.next
    curr.next=newNode
  }
}




  print() {
    if (this.head===null) {
      console.log("list is empty");
    } else {
      let curr = this.head;
      let listValues = "";
      while (curr) {
        listValues += `${curr.value} `;
        curr = curr.next;
      }
      console.log(listValues);
    }
  }
}


const list = new LinkedList();
// list.insert(1,0)
// list.insert(2,1)
// list.insert(3,0)
// list.addtoBack('last')
// list.addtoBack('newLast')
// list.midOf()


// list.insert(0,0)
// list.insert(1,0)
// list.insert(2,0)
// list.insert(3,0)
// list.insert(5,5)
// console.log(list.midOf())
// list.shaheer('new');
// console.log(list.reverse());
list.print();


// insert(value, index) {
//   if (index < 0 || index > this.size) {
//     return console.log("enter a valid index");
//   }
//   if (index === 0) {
//     this.prepend(value);
//   } else {
//     const node = new Node(value);
//     let curr = this.head;
//     for (let i = 0; i < index - 1; i++) {
//       curr = curr.next;
//     }
//     node.next = curr.next;
//     curr.next = node;
//     this.size++;
//   }
// }

// removeFrom(index) {
//   if (index < 0 || index > this.size) {
//     return console.log("invalid index");
//   }
//   let removeNode;
//   if (index === 0) {
//     removeNode = this.head;
//     this.head = this.head.next;
//   } else {
//     let prev = this.head;
//     for (let i = 0; i < index - 1; i++) {
//       prev = prev.next;
//     }
//     removeNode = prev.next;
//     prev.next = removeNode.next;ƒ
//   }
//   this.size--;
//   return removeNode.value;
// }

// removeValue(value) {
//   if (this.head===null) {
//     return null;
//   }
//   if (this.head.value === value) {
//     this.head = this.head.next;
//     return value;
//   } else {
//     let prev = this.head;
//     while (prev.next && prev.next.value !== value) {
//       prev = prev.next;
//     }
//     if (prev.next) {
//       removedNode = prev.next;
//       prev.next = removedNode.next;
//       return value;
//     }
//     return null;
//   }
// }

// search(value) {
//   if (this.isEmpty()) {
//     return -1;
//   }
//   let i = 0;
//   let curr = this.head;
//   while (curr) {
//     if (curr.value === value) {
//       return i;
//     }
//     curr = curr.next;
//     i++;
//   }
//   return -1;
// }

// reverse() {
//   let prev = null;
//   let curr = this.head;
//   while (curr) {
//     let next = curr.next;
//     curr.next = prev;
//     prev = curr;
//     curr = next;
//   }
//   this.head = prev;
// }

