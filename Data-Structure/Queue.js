class Queue {
  constructor() {
    this.items = {}
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }

  dequeue() {
    if (this.headIndex === this.tailIndex) {
      return undefined;
    }

    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }

  peek() {
    return this.items[this.headIndex];
  }

  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

let queue = new Queue()

queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.dequeue()

while (queue.getLength() > 0) {
  console.log(queue.dequeue()) // 3,4
}
