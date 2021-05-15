const x = {};
const y = {};
console.log(x);
console.log(y);

console.log(x.toString());

console.log(x.__proto__ === y.__proto__);

const array = [];
console.log(array);

function CoffeeMachine(beans) {
  this.beans = beans;
}

CoffeeMachine.prototype.makeCoffee = (shots) => {
  console.log("커피를 만드는 중입니다..");
};
const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);
console.log(machine1);
console.log(machine2);

function LatteMachine(milk) {
  this.milk = milk;
}
LatteMachine.prototype = Object.create(CoffeeMachine.prototype);
const latteMachine = new LatteMachine(true);
console.log(latteMachine);
latteMachine.makeCoffee(10);
