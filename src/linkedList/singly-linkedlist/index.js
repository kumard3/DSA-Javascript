class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  push(val) {
    var NewNode = new Node(val)
    if (!this.head) {
      this.head = NewNode
      this.tail = this.head
    } else {
      this.tail.next = NewNode
      this.tail = NewNode
    }
    this.length++
    return this
  }


  pop() {
    if (!this.head) return undefined
    var current = this.head
    var newTail = current
    while (current.next) {
      newTail = current
      current = current.next
    }
    this.tail = newTail
    this.tail.next = null
    this.length--
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    return current
  }
  shift(){
    if(!this.head) return undefined
    var currentHead = this.head
    this.head = currentHead.next
    this.length--;
    if(this.length === 0) {
      this.tail = null
    }
    return currentHead

  }
}

let list = new SinglyLinkedList()
list.push(1)
console.log(list)
list.push(3)
console.log(list)
// list.pop()
// console.log(list)
// list.pop()
// console.log(list)
list.shift
console.log(list)