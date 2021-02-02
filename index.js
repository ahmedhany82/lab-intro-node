class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    let added = false;
    this.length += 1;
    for(let itemIndex in this.items){
      if(item <= this.items[itemIndex]) {
        this.items.splice(itemIndex, 0, item);
        added = true
        break
      }
    }
    if(added === false) {
        this.items.push(item);
    }
  }

  get(pos) {
    if(pos < this.length)
    {
      return this.items[pos];
    } else {
      throw new Error('OutOfBounds');
    }
    
  }

  max() {
    if(this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.items.reduce((x, y) => (x > y) ? x : y)
    }
  }

  min() {
    if(this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.items.reduce((x, y) => (x > y) ? y : x)
    }
  }

  sum() {
    if(this.length === 0) {
      return 0;
    } else {
      return this.items.reduce((x, y) => x + y);
    }
  }

  avg() {
    if(this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.sum()/this.length;
    }
  }
}

module.exports = SortedList;
