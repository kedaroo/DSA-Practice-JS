const { SinglyLinkedList } = require("../index");

describe("insert method", () => {
  test("insert at start", () => {
    const SLL = new SinglyLinkedList();
    const value = 1;
    const output = SLL.insert(0, value);
    expect(output).toBe(1);
  });

  test("insert at end", () => {
    const SLL = new SinglyLinkedList();
    SLL.push(1);
    SLL.push(2);
    const value = 1;
    const output = SLL.insert(2, value);
    expect(output).toBe(3);
  });

  test("insert at negative index", () => {
    const SLL = new SinglyLinkedList();
    const output = SLL.insert(-2, 1);
    expect(output).toBe(-1);
  });

  test("insert at out of bound index", () => {
    const SLL = new SinglyLinkedList();
    const output = SLL.insert(1, 1);
    expect(output).toBe(-1);
  });

  test("insert in between", () => {
    const SLL = new SinglyLinkedList();
    SLL.push(1);
    SLL.push(2);
    SLL.push(4);
    SLL.push(5);
    const output = SLL.insert(2, 3);
    expect(output).toBe(5);
  });
});
