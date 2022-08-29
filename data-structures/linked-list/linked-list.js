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

  this.__proto__.isEmpty = function () {
    return length === 0;
  }

  this.__proto__.indexOf = function (element) {
    let idx = 0;
    let nextNode = head;

    if (!nextNode) {
      return -1;
    }

    while(nextNode.element !== element) {
      idx++;
      nextNode = nextNode.next;

      if (!nextNode) {
        idx = -1;
        break;
      }
    }

    return idx;
  }

  this.__proto__.elementAt = function (index) {
    let idx = 0;
    let nextNode = head;

    if (!nextNode || index >= length) {
      return;
    }

    while(idx < index) {
      nextNode = nextNode.next;
      idx++;
    }

    return nextNode.element;
  }
}
