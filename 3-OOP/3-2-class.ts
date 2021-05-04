{
  class CoffeeCup {
    shots: number;
    hasMilk: boolean;
    coffeeBeans: number;
    constructor() {
      this.shots;
      this.hasMilk;
      this.coffeeBeans = 0;
    }
    addCoffeeBeans(beans) {
      beans *= BEANS_GRAM_PER_SHOT;
      this.coffeeBeans = beans;
      console.log(`커피콩의 개수 ${this.coffeeBeans}`);
      return this.coffeeBeans;
    }
    makeCoffee(shots) {
      if (this.coffeeBeans < shots * BEANS_GRAM_PER_SHOT) {
        throw new Error(`커피콩이 부족합니다. ${this.coffeeBeans}`);
      }
      this.coffeeBeans -= shots * BEANS_GRAM_PER_SHOT;
      console.log(`커피 ${shots}잔이 나왔습니다.`);
      console.log(`남은 커피콩의 개수 ${this.coffeeBeans}`);
    }
  }

  const BEANS_GRAM_PER_SHOT: number = 7;

  const coffee = new CoffeeCup();
  console.log(coffee.addCoffeeBeans(10));
  console.log(coffee.makeCoffee(2));
}
