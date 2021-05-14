type PositionType = {
  x: number;
  y: number;
};

interface PositionInterface {
  x: number;
  y: number;
}

// Object **
const obj1: PositionType = {
  x: 1,
  y: 1,
};
const obj2: PositionInterface = {
  x: 1,
  y: 1,
  z: 1,
};

// Class **
class pos1 implements PositionType {
  x: number;
  y: number;
}
class pos2 implements PositionInterface {
  x: number;
  y: number;
  z: number;
}

// Extends
type ZPositionType = PositionType & { z: number };
interface ZPositionInterface extends PositionInterface {
  z: number;
}

// Merge
interface PositionInterface {
  z: number;
}

// Computed properties
type Person = {
  name: string;
  age: string;
};
type Name = Person["name"];

type NumberType = number;
type Direction = "left" | "right";
