const { DoublyLinkedList } = require("../index");

describe("push method", () => {
  test("length = 0", () => {
    const DLL = new DoublyLinkedList();
    const output = DLL.push(1);
    expect(output).toBe(1);
    expect(DLL.head).toBe(DLL.tail);
    expect(DLL.length).toBe(1);
  });

  test("length > 0", () => {
    const DLL = new DoublyLinkedList();
    DLL.push(1);
    const output = DLL.push(2);
    expect(output).toBe(2);
    expect(DLL.head.value).toBe(1);
    expect(DLL.tail.value).toBe(2);
    expect(DLL.length).toBe(2);
  });
});
