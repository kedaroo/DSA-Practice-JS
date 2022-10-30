const { DoublyLinkedList } = require("../index");

describe("remove method", () => {
  test("insert at negative index", () => {
    const DLL = new DoublyLinkedList();
    const output = DLL.remove(-2);
    expect(output).toBeUndefined();
  });

  test("remove from out of bound index", () => {
    const DLL = new DoublyLinkedList();
    const output = DLL.remove(3);
    expect(output).toBeUndefined();
  });

  test("remove from start", () => {
    const DLL = new DoublyLinkedList();
    const value = 1;
    DLL.unshift(value);
    const output = DLL.remove(0);
    expect(output).toBe(value);
  });

  test("remove from end", () => {
    const DLL = new DoublyLinkedList();
    DLL.push(1);
    const value = 2;
    DLL.push(value);
    const output = DLL.remove(1);
    expect(output).toBe(value);
  });

  test("remove from in between", () => {
    const DLL = new DoublyLinkedList();
    DLL.push(1);
    DLL.push(2);
    DLL.push(3);
    DLL.push(3);
    DLL.push(4);
    const output = DLL.remove(2);
    expect(output).toBe(3);
  });
});
