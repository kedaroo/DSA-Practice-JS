const { DoublyLinkedList } = require("../index");

describe("get method", () => {
  test("get at negative index", () => {
    const DLL = new DoublyLinkedList();
    const output = DLL.get(-1);
    expect(output).toBeUndefined();
  });

  test("get out of bound index", () => {
    const DLL = new DoublyLinkedList();
    const output = DLL.get(10);
    expect(output).toBeUndefined();
  });

  test("get in between index", () => {
    const DLL = new DoublyLinkedList();
    DLL.push(1);
    DLL.push(2);
    DLL.push(3);
    DLL.push(4);
    const output = DLL.get(2);
    expect(output).toBe(3);
  });
});
