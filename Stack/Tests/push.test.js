const { Stack } = require("../index");

describe("push method", () => {
  test("height = 0", () => {
    const stack = new Stack();
    const value = 1;
    const output = stack.push(value);
    expect(output).toBe(1);
    expect(stack.top.value).toBe(value);
  });

  test("height = 1", () => {
    const stack = new Stack();
    const value = 2;
    stack.push(1);
    const output = stack.push(value);
    expect(output).toBe(2);
    expect(stack.top.value).toBe(value);
  });

  test("height > 1", () => {
    const stack = new Stack();
    const value = 3;
    stack.push(1);
    stack.push(2);
    const output = stack.push(value);
    expect(output).toBe(3);
    expect(stack.top.value).toBe(value);
  });
});
