const { DoublyLinkedList } = require("../index");

describe("unshift method", () => {
  test("length = 0", () => {
    const DLL = new DoublyLinkedList();
    const value = 1;
    const output = DLL.unshift(value);
    expect(output).toBe(1);
    expect(DLL.head).toBe(DLL.tail);
    expect(DLL.head.value).toBe(value);
    expect(DLL.tail.value).toBe(value);
    expect(DLL.length).toBe(1);
  });

  test("length = 1", () => {
    const DLL = new DoublyLinkedList();
    DLL.unshift(1);
    const value = 2;
    const output = DLL.unshift(2);
    expect(output).toBe(2);
    expect(DLL.head.value).toBe(value);
    expect(DLL.tail.value).toBe(1);
    expect(DLL.length).toBe(2);
  });

  test("length > 1", () => {
    const DLL = new DoublyLinkedList();
    DLL.unshift(1);
    DLL.unshift(2);
    const value = 3;
    const output = DLL.unshift(3);
    expect(output).toBe(3);
    expect(DLL.head.value).toBe(value);
    expect(DLL.tail.value).toBe(1);
    expect(DLL.length).toBe(3);
  });
});
