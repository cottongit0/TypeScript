{
  // Type Aliases
  type Text = string;
  const name: Text = "cotton";
  const address: Text = "korea";

  type Num = number;
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: "cotton",
    age: 11,
  };

  //String Listeral Types
  type Name = "name";
  let cottonName: Name;
  cottonName = "name";

  type JSON = "json";
  const json: JSON = "json";
}
