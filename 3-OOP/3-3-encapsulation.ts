{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7;
    private coffeeBeans: number;

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }
    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }
    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        return new Error("음수는 유효하지 않은 값입니다.");
      }
      this.coffeeBeans += beans;
    }
    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
        throw new Error("커피콩이 부족합니다.");
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const coffee = CoffeeMaker.makeMachine(32);
  console.log(coffee.makeCoffee(2));

  class User {
    firstName: string;
    lastName: string;
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    private internalAge: number = 0;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      if (num < 0) {
        throw new Error("음수는 설정할 수 없습니다.");
      }
      this.internalAge = num;
    }
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }
  const user = new User("cotton", "git0");
  console.log(user.fullName);
  user.firstName = "James";
  console.log(user.fullName);

  user.age = 6;
}
