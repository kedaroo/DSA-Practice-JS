const { DoublyLinkedList } = require("../index");

describe("set method", () => {
  test("set at negative index", () => {
    const DLL = new DoublyLinkedList();
    const output = DLL.set(-1, 1);
    expect(output).toBeFalsy();
  });

  test("set out of bound index", () => {
    const DLL = new DoublyLinkedList();
    const output = DLL.set(10, 10);
    expect(output).toBeFalsy();
  });

  test("set in between index", () => {
    const DLL = new DoublyLinkedList();
    DLL.push(1);
    DLL.push(2);
    DLL.push(4);
    DLL.push(4);
    DLL.set(2, 3);
    const output = DLL.get(2);
    expect(output).toBe(3);
  });
});
