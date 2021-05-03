{
  function jsStringFunc(): any {
    return "Hello";
  }

  const result = jsStringFunc();
  console.log((result as string).length);
  console.log((<string>result).length);

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1));
}
