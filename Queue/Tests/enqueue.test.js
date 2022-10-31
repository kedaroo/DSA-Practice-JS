const { Queue } = require("../index");

describe("enqueue method", () => {
  test("length = 0", () => {
    const queue = new Queue();
    const value = 1;
    const output = queue.enqueue(value);
    expect(output).toBe(1);
    expect(queue.tail.value).toBe(value);
    expect(queue.head.value).toBe(value);
  });

  test("length = 1", () => {
    const queue = new Queue();
    queue.enqueue(1);
    const value = 2;
    const output = queue.enqueue(value);
    expect(output).toBe(2);
    expect(queue.tail.value).toBe(value);
    expect(queue.head.value).toBe(1);
  });

  test("length > 1", () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    const value = 4;
    const output = queue.enqueue(value);
    expect(output).toBe(4);
    expect(queue.tail.value).toBe(value);
    expect(queue.head.value).toBe(1);
  });
});
