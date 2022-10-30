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

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }

    this.length--;
    return tail.value;
  }

  // Time Complexity: O(1)
  unshift(value) {
    const newNode = new Node(value);

    if (this.length < 1) {
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
    }

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
  remove(index) {
    if (index < 0 || index >= this.length) return;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let prevNode;
    let currNode;
    if (index < this.length / 2) {
      currNode = this.head;
      for (let i = 0; i < index; i++) {
        prevNode = currNode;
        currNode = currNode.next;
      }
      prevNode.next = currNode.next;
      currNode.next.prev = currNode.prev;
    } else {
      currNode = this.tail;
      for (let i = this.length; i >= index; i--) {
        prevNode = currNode;
        currNode = currNode.prev;
      }
      prevNode.prev = currNode.prev;
      currNode.prev.next = currNode.next;
    }

    this.length--;
    return currNode.value;
  }

  // Time Complexity: O(n)
  get(index) {
    if (index < 0 || index >= this.length) return;

    let node;
    if (index < this.length / 2) {
      node = this.head;
      for (let i = 0; i < index; i++) {
        console.log(node.value);
        node = node.next;
      }
    } else {
      node = this.tail;
      for (let i = this.length - 1; i > index; i--) node = node.prev;
    }

    return node.value;
  }

  set(index, value) {
    if (index < 0 || index >= this.length) return false;

    let node;
    if (index < this.length / 2) {
      node = this.head;
      for (let i = 0; i < index; i++) node = node.next;
      node.value = value;
    } else {
      node = this.tail;
      for (let i = this.length - 1; i > index; i--) node = node.prev;
      node.value = value;
    }

    return true;
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
