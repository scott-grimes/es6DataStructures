class Set {


  constructor() {
    this._storage = [];
  }

  add(item) {
    if (!this.contains(item)) {
      this._storage.push(item);
    }
  }

  contains(item) {
    return this._storage.includes(item);
  }

  remove(item) {
    if (this.contains(item)) {
      var index = this._storage.indexOf(item);
      this._storage.splice(index, 1);
    }
  }
}
