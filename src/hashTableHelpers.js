
class LimitedArray {
  constructor(limit) {
    this.limit = limit;
    this.storage = [];

  }

  get(index) {
    this._checkLimit(index);
    return this.storage[index];
  }

  set(index, value) {
    this._checkLimit(index);
    this.storage[index] = value;
  }

  each(callback) {

    for (var i = 0; i < storage.length; i++) {
      this._callback(this.storage[i], i, this.storage);
    }

  }

  _checkLimit(index) {

    if (typeof index !== 'number') {
      throw new Error('setter requires a numeric index for its first argument');
    }

    if (this.limit <= index) {
      throw new Error('Error trying to access an over-the-limit index');
    }
  }

}


var madeUpHash = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};
