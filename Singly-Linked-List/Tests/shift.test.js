const { SinglyLinkedList } = require("../index");

describe("shift method", () => {
  test("length = 0", () => {
    const SLL = new SinglyLinkedList();
    const output = SLL.shift();
    expect(output).toBe(undefined);
  });

  test("length = 1", () => {
    const SLL = new SinglyLinkedList();
    const value = 1;
    SLL.unshift(value);
    const output = SLL.shift();
    expect(output).toBe(value);
    expect(SLL.length).toBe(0);
    expect(SLL.head).toBe(null);
    expect(SLL.tail).toBe(null);
  });
});
