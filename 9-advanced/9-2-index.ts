{
  const obj = {
    name: "cotton",
  };
  obj.name;
  obj["name"];

  type Animal = {
    name: string;
    age: number;
    gender: "male" | "female";
  };

  type Name = Animal["name"]; // string
  const text: Name = "only string!";

  type Gender = Animal["gender"]; // "male" | "female"

  type Keys = keyof Animal; // "name" | "age" | "gender"
  const key: Keys = "gender";

  type Person = {
    name: string;
    gender: Animal["gender"];
  };
  const person: Person = {
    name: "cotton",
    gender: "female",
  };
}
