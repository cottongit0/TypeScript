{
  interface Stack<T> {
    push(value: T): void;
    pop(): T;
    readonly size: number;
  }

  type StackNode<T> = {
    readonly value: T;
    readonly next?: StackNode<T>;
  };

  class StackImpl<T> implements Stack<T> {
    private _size: number = 0;
    private head?: StackNode<T>;
    value: T;

    constructor(private capacity: number) {}

    get size() {
      return this._size;
    }

    push(value: T): void {
      if (this.size === this.capacity) {
        throw new Error("스택이 꽉 찼습니다.");
      }
      const node: StackNode<T> = {
        value,
        next: this.head,
      };
      this.head = node;
      this._size++;
    }
    pop(): T {
      if (this.head == null) {
        throw new Error("스택이 비어있습니다.");
      }
      const node = this.head;
      this.head = node.next;
      this._size--;
      return node.value;
    }
  }

  const stack = new StackImpl<string>(10);
  stack.push("cotton1");
  stack.push("cotton2");
  stack.push("cotton3");
  while (stack.size != 0) {
    console.log(stack.pop());
  }

  const stack2 = new StackImpl<number>(10);
  stack2.push(123);
  stack2.push(342);
  stack2.push(543);
  while (stack2.size != 0) {
    console.log(stack2.pop());
  }
}
