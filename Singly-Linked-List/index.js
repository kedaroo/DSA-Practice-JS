class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Time Complexity: O(1)
  unshift(value) {
    const newNode = new Node(value);
    newNode.next = this.head;

    this.head = newNode;

    if (this.length < 1) {
      this.tail = newNode;
    }

    this.length++;
    return this.length;
  }

  // Time Complexity: O(1)
  shift() {
    if (this.length < 1) return;

    const currentHead = this.head;
    this.head = currentHead.next;

    if (this.length === 1) {
      this.tail = null;
    }

    this.length--;
    return currentHead.value;
  }

  // Time Complexity: O(1)
  push(value) {
    const newNode = new Node(value);

    this.length < 1 ? (this.head = newNode) : (this.tail.next = newNode);

    this.tail = newNode;

    this.length++;
    return this.length;
  }

  // Time Complexity: O(n)
  pop() {
    if (this.length < 1) return;
    const lastNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let prevNode;
      let currNode = this.head;
      while (currNode.next) {
        prevNode = currNode;
        currNode = currNode.next;
      }
      this.tail = prevNode;
    }

    this.length--;
    return lastNode.value;
  }

  // Time Complexity: O(n)
  insert(index, value) {
    if (index > this.length || index < 0) return -1;
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);

    const newNode = new Node(value);

    let prevNode;
    let currNode = this.head;

    for (let i = 0; i < index; i++) {
      prevNode = currNode;
      currNode = currNode.next;
    }

    prevNode.next = newNode;
    newNode.next = currNode;

    this.length++;
    return this.length;
  }

  // Time Complexity: O(n)
  remove(index) {
    if (index >= this.length || index < 0) return;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let prevNode;
    let currNode = this.head;

    for (let i = 0; i < index; i++) {
      prevNode = currNode;
      currNode = currNode.next;
    }

    prevNode.next = currNode.next;

    this.length--;
    return currNode.value;
  }

  // Time Complexity: O(n)
  get(index) {
    if (index < 0 || index >= this.length) return;
    let node = this.head;
    for (let i = 0; i < index; i++) node = node.next;
    return node.value;
  }

  // Time Complexity: O(n)
  set(index, value) {
    if (index < 0 || index >= this.length) return false;
    let node = this.head;
    for (let i = 0; i < index; i++) node = node.next;
    node.value = value;
    return true;
  }

  forEach(fn) {
    let currNode = this.head;

    while (currNode) {
      fn(currNode.value);
      currNode = currNode.next;
    }
  }
}

exports.SinglyLinkedList = SinglyLinkedList;
