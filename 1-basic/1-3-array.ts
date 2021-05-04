{
  // Array
  const fruits: string[] = ["바나나", "사과"];
  const scores: Array<number> = [1, 3, 4];

  function printArray(fruits: readonly string[]) {}

  // Tuple
  let student: [string, number];
  student = ["name", 123];
  student[0];
  student[1];
  const [name, age] = student;
}
