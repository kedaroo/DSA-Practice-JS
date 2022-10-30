const { SinglyLinkedList } = require("../index");

describe("push method", () => {
  test("length = 0", () => {
    const SLL = new SinglyLinkedList();
    const value = 1;
    const output = SLL.push(value);
    expect(output).toBe(1);
    expect(SLL.length).toBe(1);
    expect(SLL.head).toBe(SLL.tail);
  });

  test("length = 1", () => {
    const SLL = new SinglyLinkedList();
    const value = 2;
    SLL.push(1);
    const output = SLL.push(value);
    expect(output).toBe(2);
    expect(SLL.length).toBe(2);
    expect(SLL.head).not.toBe(SLL.tail);
  });
});
