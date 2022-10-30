const { SinglyLinkedList } = require("../index");

describe("pop method", () => {
  test("length = 0", () => {
    const SLL = new SinglyLinkedList();
    const output = SLL.pop();
    expect(output).toBeUndefined();
  });

  test("length = 1", () => {
    const SLL = new SinglyLinkedList();
    const value = 1;
    SLL.push(value);
    const output = SLL.pop();
    expect(output).toBe(value);
    expect(SLL.length).toBe(0);
    expect(SLL.head).toBe(SLL.tail);
  });

  test("length > 1", () => {
    const SLL = new SinglyLinkedList();
    SLL.push(1);
    SLL.push(2);
    const value = 3;
    SLL.push(value);
    const output = SLL.pop();
    expect(output).toBe(value);
    expect(SLL.length).toBe(2);
    expect(SLL.tail.value).toBe(2);
  });
});
