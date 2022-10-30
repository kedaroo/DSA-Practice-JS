const { SinglyLinkedList } = require("../index");

describe("set method", () => {
  test("set out of bound element", () => {
    const SLL = new SinglyLinkedList();
    const output = SLL.set(1, 1);
    expect(output).toBeFalsy();
  });

  test("set element at negative index", () => {
    const SLL = new SinglyLinkedList();
    const output = SLL.set(-1, 1);
    expect(output).toBeFalsy();
  });

  test("set in between element", () => {
    const SLL = new SinglyLinkedList();
    const index = 2;
    const value = 3;
    SLL.push(1);
    SLL.push(2);
    SLL.push(2);
    SLL.push(4);
    SLL.set(index, value);
    expect(SLL.get(2)).toBe(value);
  });
});
