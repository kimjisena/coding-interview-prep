const Map = function() {
  this.collection = {};
  // Only change code below this line
  this.__proto__.add = function (key, value) {
    this.collection[key] = value;
  }

  this.__proto__.remove = function (key) {
    delete this.collection[key];
  }

  this.__proto__.get = function (key) {
    return this.collection[key];
  }

  this.__proto__.has = function (key) {
    return this.collection[key] !== undefined;
  }

  this.__proto__.values = function (key) {
    return Object.values(this.collection);
  }

  this.__proto__.size = function () {
    return Object.values(this.collection).length;
  }

  this.__proto__.clear = function () {
    this.collection = {};
  }
  // Only change code above this line
};