const { SinglyLinkedList } = require("../index");

describe("get method", () => {
  test("get out of bound element", () => {
    const SLL = new SinglyLinkedList();
    const output = SLL.get(1);
    expect(output).toBeUndefined();
  });

  test("get element at negative index", () => {
    const SLL = new SinglyLinkedList();
    const output = SLL.get(-1);
    expect(output).toBeUndefined();
  });

  test("get in between element", () => {
    const SLL = new SinglyLinkedList();
    SLL.push(1);
    SLL.push(2);
    SLL.push(3);
    const output = SLL.get(0);
    expect(output).toBe(1);
  });
});
