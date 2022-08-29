let called = 0;
const hash = string => {
  called++;
  let hashed = 0;
  for (let i = 0; i < string.length; i++) {
    hashed += string.charCodeAt(i);
  }
  return hashed;
};
const HashTable = function() {
  this.collection = {};
  // Only change code below this line
  this.__proto__.add = function (key, value) {
    let keyHash = hash(key);
    if (this.collection[keyHash]) {
      if (!(this.collection[keyHash].some(elem => elem[0] === key))) {
        this.collection[keyHash].push([key, value]);
      } else {
        this.collection[keyHash] = this.collection[keyHash].filter(elem => elem[0] !== key);
        this.collection[keyHash].push([key, value]);
      }
    } else {
      this.collection[keyHash] = [[key, value]];
    }
  }

  this.__proto__.lookup = function (key) {
    let keyHash = hash(key);
    if (this.collection[keyHash]) {
      return this.collection[keyHash].filter(value => value[0] === key).flat()[1];
    }
    return null;
  }

  this.__proto__.remove = function (key) {
    let keyHash = hash(key);
    if (this.lookup(key)) {
      if (this.collection[keyHash].length > 1) {
        this.collection[keyHash] = this.collection[keyHash].filter(elem => elem[0] !== key);
      } else {
        delete this.collection[keyHash];
      }
    }
  }
  // Only change code above this line
};