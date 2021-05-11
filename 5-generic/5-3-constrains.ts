{
  interface Employee {
    pay();
  }
  class FullTimeEmployee implements Employee {
    pay() {
      console.log("정규직");
    }
    workFullTime() {}
  }
  class PartTimeEmployee implements Employee {
    pay() {
      console.log("비정규직");
    }
    workPartTime() {}
  }
  function pay<T extends Employee>(employee: T): T {
    employee.pay();
    return employee;
  }

  const cotton1 = new FullTimeEmployee();
  const cotton2 = new PartTimeEmployee();
  cotton1.workFullTime();
  cotton2.workPartTime();
  const cotton1AfterPay = pay(cotton1);
  const cotton2AfterPay = pay(cotton2);

  const obj = {
    name: "cotton",
    age: 10,
  };
  function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }
  console.log(getValue(obj, "name"));
}
