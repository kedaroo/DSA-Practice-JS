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

    if (this.length < 1) {
      this.head = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
    }

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
  insert(index, value) {
    if (index < 0 || index > this.length) return -1;
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);

    const newNode = new Node(value);

    let prevNode;
    let currNode;
    if (index < this.length / 2) {
      currNode = this.head;
      for (let i = 0; i < index; i++) {
        prevNode = currNode;
        currNode = currNode.next;
      }
    } else {
      currNode = this.tail;
      for (let i = this.length; i >= index; i--) {
        prevNode = currNode;
        currNode = currNode.prev;
      }
    }

    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = currNode;
    currNode.prev = newNode;

    this.length++;
    return this.length;
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
