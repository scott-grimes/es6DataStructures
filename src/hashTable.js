

class HashTable {

  constructor() {
    this._limit = 8;
    this._tupleCount = 0;
    this._storage = new LimitedArray(this._limit);
    this._rehashing = false;  
  }

  findTupleInBucket(bucket, k) {
  
    return _.find(bucket, (tuple) => {
      return tuple[0] === k;
    } ); 

  }

  insert(k, v) {
  
    var hashIndex = madeUpHash(k, this._limit);
    
    if ( this._storage.get(hashIndex) === undefined ) {
      this._storage.set(hashIndex, []);
    }
    
    var bucket = this._storage.get(hashIndex);
    
    var oldTuple = this.findTupleInBucket(bucket, k);
    
    if ( oldTuple !== undefined ) {
      
      bucket[ bucket.indexOf( oldTuple ) ] = [k, v];
      
    } else {
      
      bucket.push([k, v]);
      
      if ( !this._rehashing ) {
        this._tupleCount++;
        this._rehashIfNeeded();
      }
    }
  
  }

  retrieve(k) {
  
    var hashIndex = madeUpHash(k, this._limit);
    var bucket = this._storage.get(hashIndex);
    
    if ( bucket === undefined ) {
      return undefined;
    }
    
    
    
    var oldTuple = this.findTupleInBucket(bucket, k);
    
    if ( oldTuple !== undefined ) {
      return oldTuple[1];
    }
    
    return undefined;
  }

  remove(k) {
  
    var hashIndex = madeUpHash(k, this._limit);
    var bucket = this._storage.get(hashIndex);
    
    if ( bucket === undefined) {
      return;
    }
    
    
    var oldTuple = this.findTupleInBucket(bucket, k);
    
    if (oldTuple !== undefined) {
      
      bucket.splice( bucket.indexOf( oldTuple ), 1);
      
      if ( !this._rehashing ) {
        this._tupleCount--;
        this._rehashIfNeeded();
      }
    }
  
  
  }

  _rehashIfNeeded() {
  
    var ratio = this._tupleCount / this._limit;
    if ((ratio < 0.25 && this._limit > 8) || ratio > 0.75 ) {
      
      this._rehashing = true;
      var oldMemory = this._storage;
      var oldLimit = this._limit;
      
      this._limit = ratio < 0.5 ? this._limit / 2 : this._limit * 2;
      this._storage = new LimitedArray(this._limit);
      
      var oldIndices = _.range(oldLimit);
      _.each( oldIndices, (i)=>{
        var bucket = oldMemory.get(i);
        if ( bucket !== undefined) {
          
          _.each ( bucket, (tuple)=>{
         
            this.insert(tuple[0], tuple[1]);
                
          });
          
        }
        
      });
      
      this._rehashing = false;
      
    }
  }
}