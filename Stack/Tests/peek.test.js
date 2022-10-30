const { Stack } = require("../index");

describe("peek method", () => {
  test("height = 0", () => {
    const stack = new Stack();
    const output = stack.peek();
    expect(output).toBeUndefined();
  });

  test("height = 1", () => {
    const stack = new Stack();
    const value = 1;
    stack.push(value);
    const output = stack.peek();
    expect(output).toBe(value);
  });

  test("height = 2", () => {
    const stack = new Stack();
    stack.push(1);
    const value = 2;
    stack.push(value);
    const output = stack.peek();
    expect(output).toBe(value);
  });
});
