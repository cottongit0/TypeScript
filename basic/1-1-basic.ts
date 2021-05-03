{
  // NUMBER
  const num: number = -6;

  // STRING
  const str: string = "hello";

  // BOOLEAN
  const boal: boolean = false;

  // UNDEFINED
  // 값의 유무가 결정되지 않은 상태
  let name: undefined; // X
  let age: number | undefined;
  age = undefined;
  age = 1;

  // NULL
  // 값이 비어있음
  let person: null; // X
  let person2: string | null;

  // UNKNOWN X
  // 어떤 종류의 데이터가 담길지 알 수 없다.
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;

  // ANY X
  let anything: any = 0;
  anything = "hello";

  // VOID
  function print() {
    console.log("HELLO");
    return;
  }
  let unusable: void = undefined;

  // NEVER
  function throwError(message: string): never {
    throw new Error(message);
  }
  function loopNever(): never {
    while (true) {}
  }

  // OBJECT
  let obj: object = [1, 5];
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "cotton" });
  acceptSomeObject({ animal: "dog" });
}
