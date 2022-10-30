const { SinglyLinkedList } = require("../index");

describe("remove method", () => {
  test("remove first element", () => {
    const SLL = new SinglyLinkedList();
    const value = 1;
    SLL.push(value);
    const output = SLL.remove(0);
    expect(output).toBe(value);
  });

  test("remove last element", () => {
    const SLL = new SinglyLinkedList();
    SLL.push(1);
    const value = 2;
    SLL.push(value);
    const output = SLL.remove(1);
    expect(output).toBe(value);
  });

  test("remove element at negative index", () => {
    const SLL = new SinglyLinkedList();
    const output = SLL.remove(-1);
    expect(output).toBeUndefined();
  });

  test("remove out of bound element", () => {
    const SLL = new SinglyLinkedList();
    const output = SLL.remove(2);
    expect(output).toBeUndefined();
  });

  test("remove in between element", () => {
    const SLL = new SinglyLinkedList();
    SLL.push(1);
    SLL.push(2);
    SLL.push(2);
    SLL.push(3);
    SLL.push(4);
    const output = SLL.remove(1);
    expect(output).toBe(2);
  });
});
