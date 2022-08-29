function LinkedList() {
  let length = 0;
  let head = null;

  const Node = function(element){
    this.element = element;
    this.next = null;
  };

  this.head = function(){
    return head;
  };

  this.size = function(){
    return length;
  };

  this.__proto__.add = function(element){
    // Only change code below this line
    const newNode = new Node(element);
    if (!head) {
      head = newNode;
    } else {
      let nextNode = head;
      while (nextNode.next) {
        nextNode = nextNode.next;
      }
      nextNode.next = newNode;
    }
    length++;
    // Only change code above this line
  };

  this.__proto__.remove = function (element) {
    let nodeToRemove = head, prevNode = null;
    let found = true;

    while(nodeToRemove.element !== element) {
      prevNode = nodeToRemove;
      nodeToRemove = nodeToRemove.next;
      if (!nodeToRemove.next) {
        found = false;
        break;
      }
    }

    if (found) {
      if (nodeToRemove === head) {
        head = nodeToRemove.next;
      } else {
        prevNode.next = nodeToRemove.next;
      }
      length--;
    }
  }
}