class Node {

  constructor(value) {
    this.value = value;
    this.next = null;
  }
 
}


class LinkedList {

  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToTail(value) {

    var temp = new Node(value);
    
    if (this.head === null) {
      this.head = temp;
      this.tail = temp;
    } else {
      this.tail.next = temp;
      this.tail = temp;
    }

  }

  removeHead() {

    if (this.head !== null) {
      var temp = this.head;
      this.head = this.head.next;
      return temp.value;
    }

  }

  contains(target) {
    var temp = this.head;

    while (temp !== null && temp.value !== target) {
      temp = temp.next;
    }
    return (temp !== null && temp.value === target);
  }
  

}

