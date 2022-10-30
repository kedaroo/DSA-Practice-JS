const { Stack } = require("../index");

describe("pop method", () => {
  test("height = 0", () => {
    const stack = new Stack();
    const output = stack.pop();
    expect(output).toBeUndefined();
  });

  test("height = 1", () => {
    const stack = new Stack();
    const value = 1;
    stack.push(value);
    const output = stack.pop();
    expect(output).toBe(value);
    expect(stack.top).toBeNull();
  });

  test("height > 1", () => {
    const stack = new Stack();
    const value = 3;
    stack.push(1);
    stack.push(2);
    stack.push(value);
    const output = stack.pop();
    expect(output).toBe(value);
    expect(stack.top.value).toBe(2);
  });
});
