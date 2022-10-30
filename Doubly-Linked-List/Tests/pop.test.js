const { DoublyLinkedList } = require("../index");

describe("pop method", () => {
  test("length = 0", () => {
    const DLL = new DoublyLinkedList();
    const output = DLL.pop();
    expect(output).toBeUndefined();
  });

  test("length = 1", () => {
    const DLL = new DoublyLinkedList();
    const value = 1;
    DLL.push(value);
    const output = DLL.pop();
    expect(output).toBe(value);
    expect(DLL.head).toBe(DLL.tail);
    expect(DLL.length).toBe(0);
  });

  test("length > 1", () => {
    const DLL = new DoublyLinkedList();
    const value = 3;
    DLL.push(1);
    DLL.push(2);
    DLL.push(value);
    const output = DLL.pop();
    expect(output).toBe(value);
    expect(DLL.head.value).toBe(1);
    expect(DLL.tail.value).toBe(2);
    expect(DLL.length).toBe(2);
  });
});
