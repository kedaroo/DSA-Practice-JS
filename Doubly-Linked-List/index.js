class Node {
  constructor(value) {
    this.next = null;
    this.prev = null;
    this.value = value;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Time Complexity: O(1)
  push(value) {
    const newNode = new Node(value);
    this.length < 1 ? (this.head = newNode) : (newNode.prev = this.tail);
    this.tail = newNode;
    this.length++;
    return this.length;
  }
}

exports.DoublyLinkedList = DoublyLinkedList;
