class BinarySearchTree {

  constructor(value) {
  
    this.value = value;
    this.left = null;
    this.right = null;
    
  
  }

  insert(value) {
  
    if ( value < this.value && this.left === null ) {
      this.left = new BinarySearchTree(value);
      return;
    }
    
    if ( value >= this.value && this.right === null ) {
      this.right = new BinarySearchTree(value);
      return;
    }
    
    if (value < this.value) {
      this.left.insert(value);
      return;
    }
    
    this.right.insert(value);
  
  }

  contains(value) {
  
    if (this.value === value) {
      return true;
    } else if (value < this.value && this.left !== null) {
      return this.left.contains(value);
    } else if (value >= this.value && this.right !== null) {
      return this.right.contains(value);
    }
    
    return false;
    
  }

  depthFirstLog(cb) {
  
    cb(this.value);
    
    if (this.left) {
      this.left.depthFirstLog(cb);
    }
    
    if (this.right) {
      this.right.depthFirstLog(cb); 
    }
    
  }

}