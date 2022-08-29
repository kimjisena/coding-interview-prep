class Set {
  constructor() {
    // Dictionary will hold the items of our set
    this.dictionary = {};
    this.length = 0;
  }

  // This method will check for the presence of an element and return true or false
  has (element) {
    return this.dictionary[element] !== undefined;
  }

  // This method will return all the values in the set
  values () {
    return Object.values(this.dictionary);
  }

  // Only change code below this line
  add (element) {
    if (!this.has(element)) {
      this.dictionary[element] = element;
      this.length++;
      return true;
    }
    return false;
  }

  remove (element) {
    if (this.has(element)) {
      this.length--;
      return delete this.dictionary[element];
    }
    return false;
  }

  size () {
    return this.length;
  }

  union (set) {
    let unionSet = new Set();
    for (let value of this.values()) {
      unionSet.add(value);
    }

    for(let value of set.values()) {
      unionSet.add(value);
    }
    return unionSet;
  }
  // Only change code above this line
}