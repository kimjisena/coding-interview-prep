function PriorityQueue () {
  this.collection = [];
  this.printCollection = function() {
    console.log(this.collection);
  };
  // Only change code below this line
  this.__proto__.enqueue = function (item) {
    this.collection.push(item);
    this.collection.sort((a, b) => a[1] < b[1] ? -1 : a[1] > b[1] ? 1 : 0);
  }

  this.__proto__.dequeue = function () {
    return this.collection.shift()[0];
  }

  this.__proto__.size = function () {
    return this.collection.length;
  }

  this.__proto__.front = function () {
    return this.collection[0][0];
  }

  this.__proto__.isEmpty = function () {
    return this.collection.length === 0;
  }
  // Only change code above this line
}