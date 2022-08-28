function Queue() {
  let collection = [];
  this.print = function() {
    console.log(collection);
  };
  // Only change code below this line
  this.__proto__.enqueue = function (val) {
    collection.push(val);
  }

  this.__proto__.dequeue = function () {
    return collection.shift();
  }

  this.__proto__.front = function () {
    return collection[0];
  }

  this.__proto__.size = function () {
    return collection.length;
  }

  this.__proto__.isEmpty = function () {
    return collection.length === 0;
  }
  // Only change code above this line
}