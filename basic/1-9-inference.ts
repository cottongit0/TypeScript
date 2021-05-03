{
  // Type Inferencs
  let text = "hello";
  // text = 1;

  function print(message = "hello") {
    console.log(message);
  }
  print("Hello");
  // print(1);

  function add(x: number, y: number) {
    return x + y;
  }
}
