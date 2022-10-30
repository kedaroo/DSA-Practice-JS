const { DoublyLinkedList } = require("../index");

describe("shift method", () => {
  test("length = 0", () => {
    const DLL = new DoublyLinkedList();
    const output = DLL.shift();
    expect(output).toBeUndefined();
  });

  test("length = 1", () => {
    const DLL = new DoublyLinkedList();
    const value = 1;
    DLL.unshift(value);

    const output = DLL.shift();
    expect(output).toBe(value);
    expect(DLL.head).toBeNull();
    expect(DLL.tail).toBeNull();
    expect(DLL.length).toBe(0);
  });

  test("length > 1", () => {
    const DLL = new DoublyLinkedList();
    DLL.unshift(1);
    DLL.unshift(2);
    const value = 3;
    DLL.unshift(value);
    const output = DLL.shift();
    expect(output).toBe(value);
    expect(DLL.head.value).toBe(2);
    expect(DLL.tail.value).toBe(1);
    expect(DLL.length).toBe(2);
  });
});
