{
  function jsAdd(num1, num2) {
    return num1 + num2;
  }
  console.log(jsAdd(2, 3));
  console.log(jsAdd("cotton", "git0"));

  function tsAdd(num1: number, num2: number): number {
    return num1 + num2;
  }
  console.log(tsAdd(2, 3));

  function jsFetchNum(id) {
    // code...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  function tsFetchNum(id: string): Promise<number> {
    // code...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // Optional parameter
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }
  printName("Steve", "Jobs");
  printName("Cotton");
  printName("Anna", undefined);

  // Default parameter
  (function printMessage(message: string = "default message") {
    console.log(message);
  })();

  // Rest parameter
  function addNumbers(...numbers: number[]) {
    return numbers.reduce((a, b) => a + b);
  }
  addNumbers(1, 2, 3);
}
