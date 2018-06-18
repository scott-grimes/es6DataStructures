class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(value) {
  
    var temp = new Tree(value);
    this.children.push( temp );
  
  }

  contains(target) {
  
    if (this.value === target) {
      return true;
    }
    
    if ( this.children.length !== 0 ) {
      
      var arr = _.map(this.children, (x) => { 
        
        return x.contains(target);
        
      });
      
      
      if (_.reduce(arr, ( memo, x ) => { return memo || x; } ) ) {
        return true;
      }
    }
    
    return false;
  }
}