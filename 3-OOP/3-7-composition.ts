{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    protected static BEANS_GRAM_PER_SHOT: number = 7;
    private coffeeBeans: number;

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }
    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        return new Error("음수는 유효하지 않은 값입니다.");
      }
      this.coffeeBeans += beans;
    }

    clean() {
      console.log("커피 머신을 청소 중입니다...");
    }

    grindBeans(shots: number) {
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
        throw new Error("커피콩이 부족합니다.");
      }
      console.log(`${shots}개의 커피를 갈고 있습니다.`);
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
    }

    preHeat(): void {
      console.log("커피머신을 예열 중입니다. 기다려주세요.");
    }

    extract(shots: number): CoffeeCup {
      console.log(`${shots}개의 샷을 추출하고 있습니다.`);
      return {
        shots,
        hasMilk: false,
        hasSugar: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preHeat();
      return this.extract(shots);
    }
  }

  class CaffeeLatteMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans);
    }
    private steamMilk(): void {
      console.log("우유를 스팀 중입니다...");
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.steamMilk();

      return {
        ...coffee,
        hasMilk: true,
      };
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    constructor(beans: number) {
      super(beans);
    }
    private addSugar() {
      console.log("설탕을 추가합니다.");
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.addSugar();
      return {
        ...coffee,
        hasSugar: true,
      };
    }
  }

  const sweetMaker = new SweetCoffeeMaker(32);
  const sugar = sweetMaker.makeCoffee(1);
  console.log(sugar);

  const machines: CoffeeMaker[] = [
    new CoffeeMachine(16),
    new CaffeeLatteMachine(16, "SN-1010"),
    new SweetCoffeeMaker(16),
    new CoffeeMachine(16),
    new CaffeeLatteMachine(16, "SN-1010"),
    new SweetCoffeeMaker(16),
  ];
  machines.forEach((machine) => {
    console.log("---------------------------------------");
    machine.makeCoffee(1);
  });
}
