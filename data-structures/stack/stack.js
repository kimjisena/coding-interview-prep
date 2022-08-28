function Stack() {
  let collection = [];
  this.print = function() {
    console.log(collection);
  };
  // Only change code below this line
  this.__proto__.push = function (val) {
    collection.push(val);
  };

  this.__proto__.pop = function () {
    return collection.pop();
  }

  this.__proto__.peek = function () {
    return collection[collection.length - 1];
  }

  this.__proto__.isEmpty = function () {
    return collection.length === 0;
  }

  this.__proto__.clear = function () {
    collection = [];
  }
  // Only change code above this line
}
