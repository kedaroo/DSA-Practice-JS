const { SinglyLinkedList } = require("../index");

describe("unshift method", () => {
  test("length = 0", () => {
    const SLL = new SinglyLinkedList();
    const output = SLL.unshift(1);
    expect(output).toBe(1);
  });

  test("length = 1", () => {
    const SLL = new SinglyLinkedList();
    SLL.unshift(1);
    const output = SLL.unshift(2);
    expect(output).toBe(2);
  });
});
