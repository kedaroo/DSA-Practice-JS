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
}
