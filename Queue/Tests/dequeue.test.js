const { Queue } = require("../index");

describe("dequeue method", () => {
  test("length = 0", () => {
    const queue = new Queue();
    const output = queue.dequeue();
    expect(output).toBeUndefined();
  });

  test("length = 1", () => {
    const queue = new Queue();
    const value = 1;
    queue.enqueue(value);
    const output = queue.dequeue();
    expect(output).toBe(value);
    expect(queue.length).toBe(0);
    expect(queue.head).toBeNull();
    expect(queue.tail).toBeNull();
  });

  test("length = 1", () => {
    const queue = new Queue();
    const value = 1;
    queue.enqueue(value);
    queue.enqueue(2);
    queue.enqueue(3);
    const output = queue.dequeue();
    expect(output).toBe(value);
    expect(queue.length).toBe(2);
    expect(queue.head.value).toBe(2);
    expect(queue.tail.value).toBe(3);
  });
});
