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
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this.length;
  }

  // Time Complexity: O(1)
  pop() {
    if (this.length < 1) return;

    const tail = this.tail;
    this.tail = this.tail.prev;

    if (this.length === 1) {
      this.head = null;
    } else {
      this.tail.next = null;
    }

    this.length--;
    return tail.value;
  }

  // Time Complexity: O(1)
  unshift(value) {
    const newNode = new Node(value);

    this.length < 1 ? (this.tail = newNode) : (newNode.next = this.head);
    this.head = newNode;

    this.length++;
    return this.length;
  }

  // Time Complexity: O(1)
  shift() {
    if (this.length < 1) return;
    if (this.length === 1) this.tail = null;

    const head = this.head;
    this.head = this.head.next;

    this.length--;
    return head.value;
  }

  // Time Complexity: O(n)
  forEach(fn) {
    let currNode = this.head;

    while (currNode) {
      fn(currNode.value);
      currNode = currNode.next;
    }
  }
}

exports.DoublyLinkedList = DoublyLinkedList;
