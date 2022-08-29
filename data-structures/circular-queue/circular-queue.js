class CircularQueue {
  constructor(size) {

    this.queue = [];
    this.read = 0;
    this.write = 0;
    this.max = size - 1;

    while (size > 0) {
      this.queue.push(null);
      size--;
    }
  }

  print() {
    return this.queue;
  }

  enqueue(item) {
    // Only change code below this line
    if (this.write === this.read && this.queue[this.read] !== null) {
      return null;
    }
    this.queue[this.write++] = item;
    this.write %= this.max + 1;
    return item;
    // Only change code above this line
  }

  dequeue() {
    // Only change code below this line
    if (this.read === this.write && this.queue[this.write] === null) {
      return null;
    }
    let item = this.queue[this.read];
    this.queue[this.read++] = null;
    this.read %= this.max + 1;
    return item;
    // Only change code above this line
  }
}