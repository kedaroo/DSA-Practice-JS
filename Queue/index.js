class Element {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Time Complexity: O(1)
  dequeue() {
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
  enqueue(value) {
    const newNode = new Element(value);

    this.length < 1 ? (this.head = newNode) : (this.tail.next = newNode);

    this.tail = newNode;

    this.length++;
    return this.length;
  }
}

exports.Queue = Queue;
