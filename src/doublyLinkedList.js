
class Node_2 {

  constructor (value) {
    this.previous = null;
    this.value = value;
    this.next = null;
  }
}

class DoublyLinkedList {
  
  constructor () {
    this.head = null;
    this.tail = null;
  }
  
  // Time Complexity: 
  addToTail (value) {
    var temp = new Node_2 (value);
    
    if (this.head === null) {
      this.head = temp;
      this.tail = temp;
    } else {
      this.tail.next = temp;
      temp.previous = this.tail;
      this.tail = temp;
    }
  }

  addToHead (value) {
    var temp = new Node_2 (value);
    
    if (this.head === null) {
      this.head = temp;
      this.tail = temp;
    } else {
      this.head.previous = temp;
      temp.next = this.head;
      this.head = temp;
    }
  }

  removeTail () {
    if (this.tail) {
      var temp = this.tail;

      if (temp.previous) {
        this.tail = temp.previous;
        this.tail.next = null;        
      }
      
      return temp.value;
    }
  }

  // Time Complexity: 
  removeHead () {
    if (this.head !== null) {
      var temp = this.head;

      if (temp.next) {
        this.head = temp.next;
        this.head.previous = null;
      }
      
      return temp.value;
    }
  }

  // Time Complexity: 
  contains (target) {
    var temp = this.head;

    while (temp && temp.value !== target) {
      temp = temp.next;
    }

    // Only check for temp's value when temp is not null
    return (!!temp && temp.value === target);
  }

}
