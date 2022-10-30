const { DoublyLinkedList } = require("../index");

describe("insert method", () => {
  test("insert at negative index", () => {
    const DLL = new DoublyLinkedList();
    const output = DLL.insert(-2, 1);
    expect(output).toBe(-1);
  });

  test("insert at out of bound index", () => {
    const DLL = new DoublyLinkedList();
    const output = DLL.insert(3, 1);
    expect(output).toBe(-1);
  });

  test("insert at start", () => {
    const DLL = new DoublyLinkedList();
    const value = 1;
    const output = DLL.insert(0, value);
    expect(output).toBe(1);
    expect(DLL.head.value).toBe(value);
  });

  test("insert at end", () => {
    const DLL = new DoublyLinkedList();
    DLL.push(1);
    DLL.push(2);
    const value = 3;
    const output = DLL.insert(2, value);
    expect(output).toBe(3);
    expect(DLL.tail.value).toBe(value);
  });

  test("insert in between", () => {
    const DLL = new DoublyLinkedList();
    DLL.push(1);
    DLL.push(2);
    DLL.push(3);
    DLL.push(5);
    const value = 4;
    const index = 3;
    const output = DLL.insert(index, value);
    expect(output).toBe(5);
  });
});
