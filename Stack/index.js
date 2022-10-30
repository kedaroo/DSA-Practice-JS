class Element {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.height = 0;
  }

  // Time Complexity: O(1)
  push(value) {
    const newNode = new Element(value);
    newNode.next = this.top;
    this.top = newNode;
    this.height++;
    return this.height;
  }

  // Time Complexity: O(1)
  pop() {
    if (this.height < 1) return;
    const currentTop = this.top;
    this.top = currentTop.next;
    this.height--;
    return currentTop.value;
  }
}

exports.Stack = Stack;
