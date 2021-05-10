{
  interface Stack {
    push(value: string): void;
    pop(): string;
    readonly size: number;
  }

  type StackNode = {
    readonly value: string;
    readonly next?: StackNode;
  };

  class StackImpl implements Stack {
    private _size: number = 0;
    private head?: StackNode;
    value: string;

    constructor(private capacity: number) {}
    get size() {
      return this._size;
    }

    push(value: string): void {
      const node: StackNode = {
        value,
        next: this.head,
      };
      this.head = node;
      this._size++;
    }
    pop(): string {
      if (this.head == null) {
        throw new Error("스택이 비어있습니다.");
      }
      const node = this.head;
      this.head = node.next;
      this._size--;
      return node.value;
    }
  }

  const stack = new StackImpl();
  stack.push("cotton1");
  stack.push("cotton2");
  stack.push("cotton3");
  while (stack.size != 0) {
    console.log(stack.pop());
  }
}
