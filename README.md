# TypeScript

타입스크립트 공식 사이트
https://www.typescriptlang.org/

## 타입스크립트란?

자바스크립트를 베이스로 하는 superest of JavaScript로써 자바스크립트를 한 단계 감싸는 언어이다. `Statically Typed Lagnage`여서 컴파일 시간 때 타입에 관련된 에러를 잡을 수 있다. 타입스크립트는 `타입이 정적으로 결정`되어 우리가 코딩할 때 타입이 결정이 된다. 그래서 즉각적으로 타입에러를 받을 수 있다.

그리고 `강력한 객체지향 프로그래밍(OOP)`이 가능하다. OOP는 객체 위주로 모듈성있는 코드를 작성할 수 있다. 모듈별로 원하는 것을 재사용할 수 있는 `재사용성`과 객체 단위로 확장해나갈 수 있는 `확장성`도 높다. 이것들을 근본으로 하여 기존 코드에 문제해결이나 새로운 기능을 추가할 때 `유지보수`를 쉽게 할 수 있다.

자바스크립트에서는 보장받을 수 없었던 타입을 보장 받음으로써 조금 더 안정적인 소프트웨어를 만들 수 있다.

---

## 타입스크립트의 공부 방법

1. 자바스크립트의 기본적인 지식 습득
1. Web APIs에 대한 이해
1. 타입에 대한 정확한 이해
1. OOP의 중요한 원칙에 대한 이해

---

## 타입스크립트 터미널

1. 실행 <br/>
   npm i -g ts-node <br/>
   ts-node fileName.ts

1. Watch 모드 <br/>
   tsc fileName.ts

1. Terminal 컴파일 <br/>
   ts-node fileName.ts

---

## 기본 - 들어가기 전

특정한 프로그램을 만들고 프로그래밍 한다는 것은 크게 3가지로 구성된다. `input` 입력된 값을 받아와서 `operation` 입력된 값을 연산하고 처리한 뒤, `output` 다시 결과 값을 보여주는 세가지로 구성되어 있다.

`input`은 키보드로 값을 받아올 수도 있지만 파일이나 DB에서 데이터를 읽어오는 것이나 센서로 간지된 값을 받아오는 것 혹은 서버나 다른 기기에서 어떠한 값을 읽어 오거나 받아오는 것 등이 해당된다.

`operation`은 기본적인 사칙연산 뿐만 아니라 우리가 작성한 코드 함수를 실행하는 것이다.

`output`은 화면에 보여지는 것 뿐만 아니라 프린터나 파일, DB에 다시 작성하거나 서버나 다른 기기에 데이터를 전송하는 것이 해당된다.

타입이 명시되어져 있지 않은 박스에는 어떤 데이터든 담을 수 있다. 하지만 `명시되어 있는 박스`에는 명시된 것만 담을 수 있다.변수를 만들 때 타입을 지정함으로써 이 변수에는 이 데이터만 담을 수 있다는 약속을 하는 것이다.

operation(연산)을 할 때 함수가 쓰이는데, 코드가 수행된 후에 결과값을 리턴한다. 이때 타입이 없다면 어떤 데이터를 넣어야 하고 함수가 수행된 다음에는 어떤 데이터가 결과값으로 나오는지 알 수 없다.

만약 타입이 있다면 좀 더 명확하게 어떤 데이터를 담아야하는지 확인할 수 있다. 프로그램을 실행하는 도중에는 다른 타입의 데이터를 저장하거나 인자를 전달할 수 없기 때문에 조금 더 안정적으로 프로그램이 동작할 수 있도록 도와준다.

따라서 타입스크립트에서는 `최대한 명확하게 타입을 명시함`으로써 타입이 조금 더 보장이 되는 방식으로 프로그래밍하는 것이 굉장히 중요하다.변수, 클래스, 함수에 어떤 타입의 데이터를 전달할 수 있고 받아올 수 있는지를 명확하게 조금 더 세부적으로 작성해야 한다.

## 기본 - 타입을 알아보자

[NUMBER]

```ts
const num: number = -6;
```

`number`타입에는 양수, 음수, 실수를 입력할 수 있다. <br/>

[STRING]

```ts
const str: string = "hello";
```

`string`타입에는 문자, 문자열을 입력할 수 있다. <br/>

[BOOLEAN]

```ts
const boal: boolean = false;
```

`boolean`타입에는 ture, false 값을 입력할 수 있다.<br/>

[UNDEFINED]

```ts
let name: undefined; // X
let age: number | undefined;
age = undefined;
age = 1;
```

`undefined`는 기본적인 데이터를 입력할 수 없어 단독으로 쓰이는 일이 없다. 보통은 `Union`타입과 함께 사용된다. <br/>

[NULL]

```ts
let person: null; // X
let person2: string | null;
```

`null`은 기본적인 데이터를 입력할 수 없어 단독으로 쓰이는 일이 없다. 보통은 `Union`타입과 함께 사용된다. 보편적으로는 Null보다는 undefined를 많이 사용한다.<br/>

[UNKNOWN]

```ts
let notSure: unknown = 0;
notSure = "he";
notSure = true;
```

`unknown`은 어떤 종류의 데이터가 담길지 알 수 없다. 어떤 데이터 타입이든 넣을 수 있어 사용을 자제하는 편이 좋다.

타입스크립트는 `타입이 없는 자바스크립트`와 연동해서 사용할 수 있다. 자바스크립틀 라이브러리를 이용하는 경우 자바스크립트에서 리턴하는 타입을 모를 수 있다. 그럴 때 unknown을 사용할 수 있다. 하지만 `구체적으로 타입을 지정하는 것이 좋다`.

[ANY]

```ts
let anything: any = 0;
anything = "hello";
```

`any`는 무어잇든 할당할 수 있다. 어떤 것이든 담을 수 있어 가능한한 사용하지 않는 것이 좋다.

[VOID]

```ts
function print() {
  console.log("HELLO");
  return;
}
let unusable: void = undefined;
```

`void`는 아무것도 없는 타입이다. void의 경우 생략할 수 있으나 스타일 가이드에 따라서 void를 적어야 하는 경우가 있다. 변수의 선언에서 쓰는 경우는 극히 드물며 void로 선언하게 되면 undefined 밖에 할당할 수 없어 활용성이 떨어진다.

[NEVER]

```ts
function throwError(message: string): never {
  throw new Error(message);
}

function loopNever(): never {
  while (true) {}
}
```

`never`는 리턴하지 못하는 타입으로 주로 에러를 던질 때 사용된다. 리턴할 값을 입력하게 되면 never를 사용할 수 없다. 무한히 반복되는 함수나 에러를 발생하고자 할 때 사용할 수 있다.

[OBJECT]

```ts
let obj: object = [1, 5];
function acceptSomeObject(obj: object) {}
acceptSomeObject({ name: "cotton" });
acceptSomeObject({ animal: "dog" });
```

`obeject`로 선언된 변수는 어떤 타입의 데이터도 담을 수 있다. 따라서 구체적으로 object의 타입을 명시하는 것이 중요하다.

---

## 기본 - 함수에서 타입 이용하기

예제 1)

```js
function jsAdd(num1, num2) {
  return num1 + num2;
}
console.log(jsAdd(2, 3));
console.log(jsAdd("cotton", "git0"));
```

함수가 긴 경우에는 어떤 값이 전달해야 될지 모르는 경우가 있다. 위 함수의 경우, 인자로 문자를 전달하게 되면 합친 문자를 리턴하게 된다. 타입이 명시되지 않은 함수는 만든 이의 의도와 반대로 활용될 가능성이 있다. 그래서 함수에 타입을 명시하는 것은 중요하다.

```ts
function tsAdd(num1: number, num2: number): number {
  return num1 + num2;
}
console.log(tsAdd(2, 3));
console.log(tsAdd("cotton", "git0")); // ERROR!
```

예제 2)

```js
function jsFetchNum(id) {
  // code...
  return new Promise((resolve, reject) => {
    resolve(100);
  });
}
```

함수가 긴 경우에는 어떤 타입을 리턴하는 지 알기위해 함수의 끝부분을 확인해야 한다. 이러한 문제점은 타입을 명시하면 쉽게 해결할 수 있다.

```ts
function tsFetchNum(id: string): Promise<number> {
  // code...
  return new Promise((resolve, reject) => {
    resolve(100);
  });
}
```

`Promise`를 반환하는 함수의 경우 Promise<반환타입>을 입력해야 한다.

## 기본 - 함수에서 타입 이용하기 2

[Optional parameter]

```ts
function printName(firstName: string, lastName: string) {
  console.log(firstName);
  console.log(lastName);
}
printName("Steve", "Jobs");
printName("Cotton"); // ERROR!
```

두가지 인자를 사용하는 함수를 만들 시, 한가지 인자만 전달하게 되면 에러를 발생시킨다. 여러 개의 인자를 받을 수 있지만 그 중 일부만 사용하고 싶을 때가 있다. 그런 경우 `Optional parameter`를 이용하여 제어할 수 있다.

```ts
function printName(firstName: string, lastName?: string) {
  console.log(firstName);
  console.log(lastName);
}
printName("Steve", "Jobs");
printName("Cotton");
printName("Anna", undefined);
```

매개변수의 `?`를 붙임으로써 인자를 반드시 전달받지 않아도 함수를 출력할 수 있다. 전달되지 않은 인자는 `undefined`로 설정되어 진다.

```ts
function printName(firstName: string, lastName: string | undefined) {
  console.log(firstName);
  console.log(lastName);
}
printName("Steve", "Jobs");
printName("Cotton"); // ERROR!
printName("Anna", undefined);
```

Union 타입을 이용하여 인자를 제어할 수도 있지만, 이 경우 함수를 사용 시 undefined를 붙여주어야 한다. 그러지 않을 경우 에러를 발생시킨다. 함수 인자를 `optional`로 사용하고 싶다면 `?`마크를 사용하는 것이 바람직하다.

[Default parameter]

```ts
(function printMessage(message: string = "default message") {
  console.log(message);
})();
```

기본적으로 함수는 인자가 전달되지 않으면 에러가 발생한다. 하지만 아무것도 전달하고 싶지 않고 기본 메세지를 전달하고 싶다면 타입스크립트 내에서 `default`값을 설정할 수 있다. 아무런 인자를 전달하지 않아도 함수를 호출할 시, 설정한 `default`값이 실행된다.

[Rest parameter]

```ts
function addNumbers(...numbers: number[]) {
  return numbers.reduce((a, b) => a + b);
}
addNumbers(1, 2, 3);
```

함수를 사용 시, 여러 개의 인자를 받아야 하는 경우가 있다. 만약 타입이 동일한 여러 개의 인자를 받아야 하는 경우 `rest parameter`를 이용할 수 있다. 매개변수 앞에 `...`을 붙이면 쉽게 여러 개의 인자를 받을 수 있는 함수가 완성된다.

---

## 기본 - 배열과 튜플

[Array]

```ts
const fruits: string[] = ["바나나", "사과"];
const scores: Array<number> = [1, 3, 4];
```

배열을 선언하는 방법에는 두 가지 방법이 있다. `[]`를 이용한 기본적인 방법과 `Array`라는 오브젝트 타입의 변수를 가질 수 있는 배열로 정의할 수도 있다.

```ts
function printArray(fruits: readonly string[]) {}
function printArray(scores: readonly Array<number>) {} //ERROR!
```

두 방식의 차이점은 `readonly`의 사용여부이다. 오브젝트 타입으로 선언된 배열은 `readonly`를 사용할 수 없다. 만약 읽기 전용으로 배열을 만들고 싶다면 `[]`를 이용해서 변수를 생성해야 한다.

`오브젝트의 불변성`을 보장하는 것은 굉장히 중요하다. 그래서 `readonly`를 많이 사용하게 된다. 일관성 있는 코드를 짜고 싶다면 `[]`를 이용하여 타입을 선언하는 것이 좋다.

[Tuple]
원래 배열에는 `한가지 타입`만 허용할 수 있다. 하지만 `tuple(튜플)`을 이용하면 서로 다른 타입을 가진 데이터를 담을 수 있다.

```ts
let student: [string, number];
student = ["name", 123];
student[0]; // name
student[1]; // 123
```

배열 안에 여러 타입의 데이터를 넣을 수 있다는 장점이 있으나 권장되는 방법은 아니다. 데이터를 접근할 때 인덱스로 접근하는 것은 가독성이 떨어진다. 인덱스만으로는 어떤 데이터가 들어있는지 유추하기가 어렵다. `class`형태를 이용하면 조금 더 명시적으로 접근할 수 있다. tuple을 사용하는 것보단 후술할 `interface, type alias, class`를 이용하는 것이 명시적이고 가독성이 좋다. 그래서 tuple을 사용하는 경우는 드물다. 하지만 이러한 tuple의 문제점은 `Object destructuring`로 어느정도 해결이 가능하다.

```ts
const [name, age] = student;
```

하지만 여전히 데이터가 정해진 곳이 아니라 데이터를 사용하는 곳에서 임의로 name과 age라고 이름을 결정하고 써야하는 단점이 존재한다.

---

## 기본 - Type Alias

**[Type Alias]**

```ts
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
```

`type alias`는 `새로운 타입을 정의하여 사용하는 것`으로, 기본적인 타입 정의부터 시작해서 복잡한 타입까지 정의할 수 있다. `type alias`는 `primitive type` 뿐만 아니라 `object` 형태도 정의할 수 있다.

```ts
type Student = {
  name: string;
  age: number;
};

const student: Student = {
  name: "cotton",
  age: 11,
};
```

[String Listeral Types]
타입을 `문자열`도 지정할 수 있다.

```ts
type Name = "name";
let cottonName: Name;
cottonName = "name";

type JSON = "json";
const json: JSON = "json";
```

cottonName 변수에는 NAME 타입을 따라간다. 즉, cottonName에는 오직 "name"이라는 문자열만 할당할 수 있다.

---

## Union types <OR>

```ts
type Direction = "left" | "right" | "up" | "down";
function move(direction: Direction) {
  console.log(direction);
}
move("left");
```

`union`타입은 쉽게 OR로 설명이 된다. 원하는 하는 타입을 `|(OR)`를 통해 묶을 수 있다.

<img src="./images/union1.png"><br/>
문자열을 작성하려는 순간 이 함수가 받을 수 있는 direction의 4가지 타입을 `자동으로` 보여준다.가능한 케이스 중에 발생할 수 있는 딱 하나를 담을 수 있는 타입을 만들고 싶을 때 `union`타입을 이용한다.
<br/><br/>
<img src="./images/union2.png"><br/>
`union`타입에 입력되지 않은 값을 넣으려 하자 에러가 발생한다. `union` 타입은 발생할 수 있는 모든 케이스 중에 하나만 할당할 수 있다.

union 타입을 활용해보자. 로그인하는 함수가 있다. 성공했다면 response를 반환하고 실패했다면 실패 reason을 반환한다.

```ts
type SuccessState = {
  response: {
    body: string;
  };
};
type FailState = {
  reason: string;
};

function login(id: string, password: string): SuccessState | FailState {
  return {
    response: {
      body: "로그인 성공",
    },
  };
}
```

`union`타입을 이용하여 성공 시와 실패 시 타입을 정한다. Object를 이용하여 복잡한 타입도 구현할 수 있다. 이보다 훨씬 가독성 좋게 `union`을 활용할 수 있다.

```ts
type SuccessState = {
  response: {
    body: string;
  };
};
type FailState = {
  reason: string;
};
type LoginState = SuccessState | FailState;

function login(id: string, password: string): LoginState {
  return {
    response: {
      body: "로그인 성공",
    },
  };
}
```

LoginState라는 union 타입을 추가하여 묶을 수 있다. 이러면 함수가 정의된 것만을 보아도 login을 할 떄, id와 password를 받아오면 LoginState를 리턴하는 것을 쉽게 확인할 수 있다.

> 원래는 네트워크 통신은 비동기로 하기에 LoginState를 promise하는 'promise'를 리턴해야 한다.

이처럼 union은 발생할 수 있는 다양한 케이스 중에 하나만 정하고 싶을 떄 많이 사용한다.

어떤 타입(LoginState)냐에 따라서 다르게 출력되는 것을 구현해보자. 성공(SuccesState), 실패(FailState)에 따라 다르게 출력시킨다.

printLoginState 함수는 state를 인자로 받아온다. 타입은 LoginState로 union타입으로 직접 만든 타입이다. 아무것도 리턴하지 않으므로 함수의 리턴 타입은 void다. state의 값이 무엇이냐에 따라서 성공시 body를 출력하고 실패시 reason을 출력해야 한다.

Class를 이용했던 것처럼 state.response를 쓰더라도 타입스크립트는 알 수 없다. 따라서 다른 방법으로 이용해야 한다.

```ts
function printLoginState(state: LoginState) {
  if ("response" in state) {
    console.log(`${state.response.body}`);
  } else {
    console.log(`${state.reason}`);
  }
}
```

`in` 키워드를 이용하면 state 안에 있는 reaponse에 접근할 수 있다. 자동완성이 되어 바로바로 찾아진다. else 사용 시에도 자동완성이 쉽게 된다. LoginState에는 두 가지 타입밖에 없기 떄문에 이미 사용된 SucessState가 아닌 FailState의 reason을 추천해준다. `in`이라는 키워드를 통해 이용할 수 있으나 이 방법은 좋지 않다. LoginState의 값은 두 가지로 타입스크립트는 `in`키워드를 사용하기 전까지 어떤 값이 올지 모른다. 만약 코드를 전혀 모르는 작성자가 `in` 키워드를 사용하기 위해서는 state안에 어떤 key 값이 어떻게 구분되어 있는지 확인해야 한다. 이 문제를 해결하기 위해 `Discriminated Union`을 사용할 수 있다.

---

## 기본 - Discriminated Union

union 타입과는 `차별화`되는 이름의 `동일한 타입`을 둠으로써 간편하게 구분지을 수 있다. 어떤 케이스든 공통적인 프로퍼티를 가지고 있음으로서 조금 더 구분하기 쉽게 만들어준다.

`union` 타입에서 사용했던 예제를 `discriminated` 타입으로 코드를 리펙토링해보자.

```ts
type SuccessState = {
  result: "success";
  response: {
    body: string;
  };
};
type FailState = {
  result: "fail";
  reason: string;
};
type LoginState = SuccessState | FailState;

function login(id: string, password: string): LoginState {
  return {
    result: "success",
    response: {
      body: "로그인 성공",
    },
  };
}

function printLoginState(state: LoginState) {
  if (state.result === "success") {
    console.log(`성공. ${state.response.body}`);
  } else {
    console.log(`실패. ${state.reason}`);
  }
}
```

각각 union 타입 안에는 동일한 result라는 key를 갖고 있지만 어떤 state냐에 따라서 다른 값이 지정되어 있다. result라는 타입으로 `차별화`를 둔 덕분에 타입스크립트는 state 내부 값에 에러없이 바로바로 접근할 수 있다.

`discriminated` 타입을 이용하면 조금 더 직관적으로 코드를 작성할 수 있고 가독성도 좋아진다.

---

## Intersection Type <AND>

`union` 타입은 발생할 수 있는 케이스 중에 한 가지만 선택하는 것이었다면, `intersection`은 그 모든 것을 합한 성격이다. `union`이 `OR`같은 개념이었다면 `intersection`은 `AND`와 같은 개념이다.

```ts
type Students = {
  name: string;
  score: number;
};
type Worker = {
  employeeId: number;
  work: () => void;
};

function internWork(person: Students & Worker) {
  console.log(person.name, person.employeeId, person.work());
}

internWork({
  name: "cotton",
  score: 1,
  employeeId: 123,
  work: () => {},
});
```

`intersection` 타입으로 정의되면 모든 데이터가 들어가 있는 object를 전달해야 한다. 하나라도 빠지면 에러가 발생한다. `intersection` 타입을 사용하면 다양한 타입을 하나로 묶어서 선언할 수 있다.

---

## 기본 - Enum

`enum`은 다른 프로그래밍 언에서 흔하게 사용되는 타입이다. 과련도니 상수 값들을 한 곳으로 모아 정의할 수 있게 도와주는 타입이다. 하지만 자바스크립트에서는 enum 타입이 존재하지 않아 다른 방법으로 `enum`을 구현했다.

```js
const MAX_NUM = 6;
const MAX_STUDENTS_PER_CLASS = 10;
```

자바스크립트에서 상수를 정의할 떄, 한 번 정해지면 바뀌지 않은 특정한 고정 값을 나타낼 때 `대문자` 형태로 사용한다. 하지만 서로 연관되어 있지만 묶을 수 있는 `enum` 타입이 존재하지 않는다. 그래서 `enum`과 가깝게 표현할 수 있는 `Object.freeze`를 이용해왔다.

```js
const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUSEDAY: 1, WEDNESDAY: 2 });
const dayOfToday = DAYS_ENUM.MONDAY;
```

하지만 타입스크립트에서는 자체적으로 `enum` 타입을 제공하고 있다.

```ts
enum Days {
  Monday,
  Tuesday,
  Wednesday,
  Tursday,
  Friday,
  Satarday,
  Sunday,
}
console.log(Days.Friday);
const day = Days.Monday;
console.log(day);
```

`enum`을 통해 공통된 데이터를 묶을 수 있다. 별다른 선언이 없으면 맨 위(Monday)는 0으로 시작된다. 그래서 console.log(Days.Friday);를 통해 값을 확인해보면 4가 출력됨을 확인할 수 있다.

```ts
enum Days {
  Monday = 1,
  Tuesday,
  Wednesday,
  Tursday,
  Friday,
  Satarday,
  Sunday,
}
```

이와 같이 직접 숫자를 할당하면, 그 숫자부터 다시 순서대로 할당된다. console.log(Days.Friday); 를 통해 값을 확인해보면 4였던 값이 5가 됨을 확인할 수 있다.

```ts
enum Days {
  Monday = "md",
  Tuesday = "td",
  Wednesday = "wd",
  Tursday = "td",
  Friday = "fd",
  Satarday = "std",
  Sunday = "sud",
}
```

문자도 할당할 수 있는데, 이 경우 모든 데이터에 문자를 할당해주어야 한다. 다시 console.log(Days.Friday); 통해 값을 확인해보면 fd가 출력된다.

하지만 타입스크립트에서 `enum`의 사용은 권장되지 않는다. 예제를 통해 알아보자.

```ts
enum Days {
  Monday,
  Tuesday,
  Wednesday,
  Tursday,
  Friday,
  Satarday,
  Sunday,
}

let day: Days = Days.Monday;
day = Days.Tuesday;
day = 10;
```

day라는 변수는 `enum`인 Days 타입을 받고 있다. day에는 Days에 있는 데이터를 마음대로 넣을 수 있다. 그 중에는 숫자값도 받을 수 있다. 우리가 선언한 Days에는 0에서 6까지만 사용이 가능하다. 하지만 days는 7이상의 값까지 받아도 에러를 발생하지 않는다. 타입스크립트를 컴파일하면 경고메시지없이 작동하는 것을 확인할 수 있다. `enum` 타입을 사용하게 되면 타입이 정확하게 보장되지 않는다. 타입스크립트에서는 `enum`을 사용하지 않고 앞에서 사용했던 `union` 타입을 통해 enum을 재현할 수 있다.

```ts
type DaysOfWeek = "Monday" | "Tuesday" | "Wednesday";
let dayOfWeek: DaysOfWeek = "Monday";
dayOfWeek = "Tuesday";
```

<img src="./images/enum1.png"><br/>
문자열을 입력하면 들어갈 수 있는 값들이 자동으로 나와 코드를 쉽게 완성할 수 있다. DayOfWeek에 해당하지 않은 다른 변수 값은 할당할 수 없으며 오직 `union`타입에 지정된 값만 사용할 수 있다.

> 그럼에도 불구하고 타입스크립트에서 `enum`을 사용해야 하는 경우가 있다. 다른 모바일 클라이언트 안드로이드나 IOS는 코틀린이나 스위프트와 같은 언어를 이용한다. 사용자의 데이터를 JSON으로 묶어서 다시 클라이언트에게 보내야할 때, 모바일 클라이언트에서 사용하는 네이티브 프로그래밍 언어에서는 `union `타입을 표현할 수 있는 방법이 없다. 그래서 서로 이해할 수 있는 `enum` 타입을 사용한다.

---

## 기본 - Type Inferencs(타입추론)

타입스크립트에서 자체적으로 타입을 결정하는 경우가 있다.

```ts
let text = "hello";
text = 1;
```

text에 별다른 타입을 명시하지 않았음에도 text에 1을 삽입하려 하자 에러를 발생시킨다. 이는 타입스크립트가 text에 삽입된 값을 보고 string 타입이라고 `추론`한 것이다.

```ts
function print(message = "hello") {
  console.log(message);
}
print("Hello");
print(1);
```

message에는 타입은 명시되어 있지 않지만 default 값이 입력되어 있다. 타입스크립트는 이 default 값을 통해 타입을 추론한다. 그래서 문자열을 통해 print를 호출한 경우 에러를 발생시키지 않지만, 숫자를 인자로 전한 경우 에러를 발생시킴을 확인할 수 있다.

```ts
function add(x: number, y: number) {
  return x + y;
}
```

add 함수의 리턴값에는 타입이 명시되어 있지 않지만 x와 y 값은 number로 명시되었다. return 값은 number 타입인 x와 y를 더한 값을 리턴하고 있다.

<img src="./images/inference1.png"><br/>

그래서 타입스크립트는 자체적으로 add함수는 number타입을 리턴할 것으로 추론한다.

타입을 명시할 필요없이 타입스크립트는 자체적으로 타입을 추론한다. 하지만 코드가 복잡해질 수록 추론은 어려워진다. 모든 경우에서는 타입을 정확하게 명시하는 것이 중요하다.

---

## 기본 - Type Assertion

타입스크립트는 타입이 없는 자바스크립트와 함께 연동되는 경우가 있다. 그래서 `type assertion`을 불가피하게 사용해야 되는 경우가 있다. 예를 들어 자바스크립트 함수에 string과 관련된 함수가 있다 해보자.

```ts
function jsStringFunc(): any {
  return "Hello";
}

const result = jsStringFunc();
console.log(result.length); // 사용불가!
```

자바스크립트는 타입이 없기 때문에 어떤 값을 리턴하는지 컴파일은 알 수 없다. 그래서 타입스크립트는 any 타입으로 추론한다. 하지만 이 함수는 분명히 문자열을 리턴한다. 내가 만약 이 문자열의 길이를 알고 싶다면 문자열 타입에 사용할 수 있는 API인 `length`를 사용하고자 할 것이다. 하지만 타입스크립트에서는 result 값은 any이다. 그래서 문자열 타입에서 이용할 수 있는 API를 사용할 수 없다. 하지만 result 값이 100% 문자열이라고 확신할 때 `type assertion`을 통해 해결할 수 있다.

```ts
console.log((result as string).length);
console.log((<string>result).length);
```

`as type` 혹은 `<type>`을 통해 result의 값을 문자열로 명시해주면 any값을 반환받았음에도 불구하고 문자열 API를 사용할 수 있다. 하지만 `type assertion`을 사용하면 문제가 발생할 수 있다.

```ts
function jsStringFunc(): any {
  return 1;
}

const result = jsStringFunc();
console.log((result as string).length);
console.log((<string>result).length);
```

이제 jsStringFunc은 숫자를 반환한다. 우리는 이제 result는 숫자값임을 알 수 있다. 하지만 타입스크립트는 `type assertion`으로 인해 문자열이라고 확신하고 있다. 그래서 이를 컴파일 하면 아무런 에러를 발생하지 않고 컴파일이 완료된다. 이번에는 다른 예제를 살펴보자.

```ts
const wrong: any = 5;
console.log((wrong as Array<number>).push(1)); // ERROR!
```

wrong 변수는 any 타입이다. 이를 숫자를 가진 배열이라고 확신하고 배열 API인 push를 사용한다. 하지만 이를 컴파일 하면 에러가 발생하고 애플리케이션이 종료됨을 확인할 수 있다.

> TypeError wrong.push is not a function

```ts
function findNumbers(): number[] | undefined {
  return undefined;
}

const numbers = findNumbers();
numbers!.push(2);
```

findNumbers() 함수를 보면 number 배열 혹은 undefined를 리턴한다. numbers가 숫자 배열이라 생각하여 배열 API를 사용하게 되면 타입스크립트는 경고를 발생시킨다. 하지만 이것이 number 배열임을 확신한다면 변수 뒤에 `!`를 붙임으로써 타입을 확신시킬 수 있다. null 혹은 undefined가 아님을 확신시키는 것이다.

HTML로 동적으로 받아올 떄 예제를 확인해보자.

```ts
const button = document.querySelector("class");
```

queryselector를 이용하면 선택자를 통해 DOM요소를 동적으로 받아올 수 있다. querySelecter의 함수정의를 확인해보자.

```ts
querySelector<E extends Element = Element>(selectors: string): E | null;
```

querySelector는 Element(요소)를 찾으면 element를 리턴할 수 있고, element가 존재하지 않는다면 null을 리턴시킨다. querySelector를 통해 받아온 button은 element가 있을 수 있고 null일 수도 있다.

```ts
button?.nodeValue;
```

그래서 button의 nodeValue를 이용하려 하면 경고를 발생시킨다. 만약 정말로 button 값이 있음을 확신한다면 `!`를 통해 해결할 수 있다.

```ts
const button = document.querySelector("class")!;
```

하지만 `type assertion`은 가능하면 피해서 쓰는 것이 좋다. 잘못하면 에러를 발생시켜 애플리케이션이 종료될 수 있기 때문이다.

---

# OOP(Obeject Oriented Programming)

`객체지향 프로그래밍(OOP)`는 프로그래밍 패러다임이다. 이 패러다임은 프로그래밍을 하는 여러가지 스타일 중에 한 가지 방식이다. OOP는 오브젝트 객체들을 컨셉으로 하여 프로그래밍을 해나가는 방식을 의미한다. 이 오브젝트는 관련된 데이터나 코드를 함께 묶을 수 있다. 다양한 프로그래밍 언어로 객체지향 프로그래밍 스타일을 구현할 수 있다. 언어마다 어떤 방식으로 어떤 문법을 통해서 객체지향을 구현할 수 있는지는 조금씩 달라지지만 전반적인 개념과 사용방법, 코딩방식에는 큰 차이가 나지 않는다. 한 언어로 객체지향을 충분히 마스터하면 다른 프로그래밍 언어를 공부하는 것은 크게 어렵지 않다.

---

## OOP - 객체지향 개념 정리

객체지향과 상반되는 Imperative 명령어와 그리고 Procedural 절차적인 프로그래밍이 있다. 하나의 어플리케이션을 만든다면 어플리케이션이 동작하기 위한 데이터와 함수를 위주로 구성하는 것을 말한다. 보통 제일 처음에 실행되는 main 함수가 있다.
<img src="./images/procedural.png"> <br/>
main 함수에서 play와 startTimer라는 함수를 호출할 수 있다. 각각 함수 안에서 여러가지 함수를 호출할 수 있다. 함수 내부에서는 전역적으로 설정된 변수의 데이터에 접근할 수 있다. 이처럼 정의된 순서대로 절차적으로 함수가 하나씩 호출되는 방식을 `절차지향적 프로그래밍`이라고 한다.

절차지향적 프로그래밍에는 단점이 많다. 지금부터 단점을 알아보자.

프로젝트에 신규로 투입되었다면 함수가 여러가지로 얽혀있고 데이터도 다른 곳에서 업데이트 될 수 있기 때문에 하나를 수정하기 위해서는 전체적인 어플리케이션이 어떻게 동작하는지를 잘 이해해야 한다. 그리고 하나를 수정했을 때 다른 사이드 이펙트가 발생할 확률이 높다. 한눈에 어플리케이션을 이해하기가 어려운 단점도 있다. 그래서 절차지향적 프로그래밍은 유지보수가 힘들고 확장하기도 어렵다.

<img src="./images/oop.png"> <br/>

반대로 `OOP(객체지향 프로그래밍)`은 프로그램을 객체로 정의해서 객체들끼리 서로 의사소통하도록 디자인하고 코딩해 나가는 것을 의미한다. 서로 관련있는 데이터와 함수를 여러가지 오브젝트로 정의해서 프로그래밍할 수 있다. 객체지향은 `오브젝트 단위`로 만들어 나가기 때문에 한 곳에서 문제가 생긴다면 관련있는 오브젝트만 이해하고 수정하면 된다. 또 여러 번 반복되는 부분이 있다면 관련된 오브젝트를 `재사용`할 수 있다. 무언가 새로운 기능이 필요할 때면 새로운 오브젝트를 다시 만들면 되어 `확장성`도 높아진다. 이처럼 잘 설계된 OOP는 생산성을 높여주고 조금 더 좋은 퀄리티의 프로그램을 만들 수 있게 도와준다. 더 빠르게 구현하고 새로운 기능을 추가해주며 문제를 해결하고 유지보수성이 높다.

오브젝트에는 `오브젝트의 속성을 가지고 있는 데이터`와 `행동을 할 수 있는 코드를 수행할 수 있는 함수`로 구성되어 있다. 음악 플레이어 프로그램이 있다고 해보자. 미디어 플레이어라는 오브젝트를 구현해서 음악파일을 가지고 있고 음악을 재생하고 컨트롤러를 조작할 수 있는 함수로 구성할 수 있다. 오브젝트는 우리 주변에서 볼 수 있는 다양한 객체들을 선정해서 디자인 할 수 있다. 실제로 존재하는 물체 뿐만 아니라 우리가 프로그래밍할 때 맞닥뜨릴 수 있는 추상적인 컨셉의 Error, Exception, Event 등 모두 오브젝트로 만들어 관리할 수 있다.

오브젝트 안에 들어있는 데이터들을 `fields` 혹은 `properties`라고 부른다. 함수는 `methods`라고 부른다. 오브젝트 안에 이런 종류의 데이터와 메소드가 있다는 것은 class를 이용해서 정의할 수 있다. `class`는 정의하는 `빈 템플릿`으로 실제로 class의 데이터를 넣어서 만드는 것이 `object`이다. object는 `class의 인스턴스`라고 불린다. class는 어떻게 생겼는지 묘사하며, obejct는 class 내부에 들어간 데이터라고 볼 수 있다.

---

## OOP - 객체지향의 원칙

class만 정의하고 object만 만든다고 해서 객체지향 프로그래밍인 것은 아니다. 객체지향 프로그래밍을 결정하는 중요한 4 가지의 원칙을 잘 이해하고 작성해야 한다. 객체지향의 원칙에 대한 개념을 알아보도록 하자.

1. Encapsulation ( 캡슐화 )

<img src="./images/encapsulation.png">

절차지향 프로그래밍 언어에서는 데이터와 함수들 여러가지가 섞여있다. 흩어져 있는 데이터와 함수들 중 `서로 연관된 것들을 묶는 것이 캡슐화`다. 예를 들어 감기약이 있다. 캡슐약 안에는 다양한 성분의 가루약이 있다. 우리는 어떤 성분의 가루가 들어있는지 신경쓰지 않고 약만 먹으면 된다. 그것과 마찬가지로 `서로 관련있는 데이터와 함수를 한 오브젝트 안에 담아두고 외부에서 보일 필요가 없는 데이터는 잘 숨겨 놓음`으로써 캡슐화할 수 있다. 어떤 관련있는 데이터를 오브젝트로 묶어낼 것인지, 어떤 데이터는 외부에서 볼 수 있고 볼 수 없는지 이런 것들을 생각하고 만들어 내는 것이 OOP의 출발점이다.

또 다른 예시를 확인해보자. 고양이 한 마리가 있다. 고양이의 내부(감정) 상태를 외부에서 설정할 수는 없다. 고양이가 배고프고 화나고 행복한 감정은 내부에 있는 상태이다. 하지만 이를 우리가 아예 못 바꾸는 건 아니다. 먹이를 주고 놀아줌으로써 고양이의 내부 상태를 바꿀 수 있다. 내부의 상태를 외부에서는 변경할 수 없지만 외부 function을 통해서 내부 상태를 바꿀 수 있다. 이것이 바로 캡슐화이다.

2. Abstraction ( 추상성 )

<img src="./images/abstraction.png">

추상화 혹은 추상성은 `내부의 복잡한 기능을 이해하지 않아도 외부에서 간단한 인터페이스를 통해 사용할 수 있는 것`을 의미한다. 커피머신을 통해 추상성을 알아보자. 커피머신 한 대가 있다. 커피머신이 어떻게 동작하는 지 우리는 알 수 없다. 내부구조가 어떻게 되어 있는지 알지 못하지만 간단하게 버튼 하나만 누르면 커피를 만들 수 있다. 이처럼 추상화를 통해 외부에서는 내부가 어떻게 구현되어 있고 얼마나 복잡한 지 알 필요 없이 `외부에서만 보이는 이 인터페이스 함수를 이용해서 오브젝트를 사용`할 수 있다.

3. Inheritance ( 상속 )

<img src="./images/inheritance1.png">

다시 커피머신으로 돌아가보자. 커피머신이라는 class가 정의되어 있다. 커피 머신에는 필요한 데이터와 함수가 함께 들어가 있다. 상속을 이용하면 이미 만들어진 커피머신의 데이터와 함수를 그대로 가져오면서 내가 좀 더 필요한 기능을 더해서 다른 종류의 커피 머신을 만들 수 있다. 즉, 상속을 이용하면 `정의해둔 클래스를 재사용`할 수 있다.

상속의 관계는 perent / super / base 클래스와 childe /sub / derived 클래스로 나눠부를 수 있다. 이런 상속의 관계를 IS-A관계라고도 부른다. 이처럼 상속을 받은 자식 클래스는 부모 클래스라고도 말할 수 있다.

또 다른 예시를 확인해보자. animal이라는 makeSound라는 함수를 가진 클래스가 있다. 상속한 강아지, 고양이, 돼지가 있다. 모두 다 animal을 상속했기 때문에 모두 animal이라고 말할 수 있다. 상속을 한 덕분에 모두 makeSound라는 함수를 갖고 있다.

<img src="./images/Inheritance2.png">

다른 상속의 예제를 하나 더 확인해보자. 브라우저 위에서 DOM 요소도 다 상속을 통해 구현되어 있다. HTMLElement 클래스는 Element라는 클래스를 상속 받았다. 즉, HTMLElement는 바로 Element라고 말할 수 있다. 이 Element는 Node도 상속받았다. Node 안에 있는 속성과 Node 안에 있는 모든 함수가 Element를 사용할 수 있다. 그리고 Node는 EventTarget을 상속받았다. EventTarget에 있는 이벤트와 관련된 모든 속성과 함수들을 Node에서도 사용할 수 있다. Element는 Node를 상속 받았기 때문에 EventTarget 뿐만 아니라 Node에 있는 모든 것을 이용할 수 있다. HTMLElement는 EventTarget, Node, Element 모든 것들을 다 사용할 수 있다.

상속의 구조를 보면 Document나 Element나 Text 이런 모든 요소들은 EventTarget을 상속하기 때문에 모든 요소들이 다 이벤트가 발생할 수 있구나 이해할 수 있게 도와준다.

4. Polymorphism ( 다형성 )

poly는 many, morphy라는 다양한 형태를 말한다. 앞의 예시로 돌아가보자. 다형성은 상속을 통해서 만들어진 강아지, 고양이, 돼지를 어떤 종류의 동물인지 상관하지 않고 animal에 정의된 makeSounde 함수를 이용해서 공통적으로 함수를 호출할 수 있다.

커피 기계도 마찬가지다. makeCoffee라는 함수를 이용해서 어떤 종류의 커피 기계인지 전혀 신경쓸 필요없이 공통된 함수를 이용해서 접근할 수 있다.이를 다형성이라고 부른다.

---

## OOP - 객체지향 프로그래밍

### 절차지향적으로 커피머신 만들기

객체지향 프로그래밍을 하기 전, `절차지향적`으로 프로그래밍을 해보자. 이제부터 커피머신을 만들 것이다. 커피머신에는 샷과 우유가 들어가며 커피콩이 필요하다. 절차지향적으로 커피머신을 만들기 위해서는 어떻게 해야할까?

먼저 커피를 만들 수 있는 makeCoffee 함수를 구현해야 한다. makeCoffee는 shot의 개수를 받는 함수이다. shots는 number 타입이다.

```ts
function makeCoffee(shots: number) {}
```

커피를 만들게 되면 커피를 리턴해야 한다. 리턴할 수 있는 object인 CoffeeCup을 만든다. CoffeeCup에는 shots의 개수와 milk의 여부가 들어간다. 그리고 makeCoffee는 이제부터 CoffeeCup을 반환한다.

```ts
type CoffeeCup = {
  shots: number;
  hasMilk: boolean;
};
function makeCoffee(shots: number): CoffeeCup {}
```

커피를 만들 때에는 CoffeeBeans도 필요하다. CoffeeBeans의 총량과 샷 한번에 얼만큼의 CoffeeBeans가 필요한지 적혀있어야 한다.

```ts
const BEANS_GRAMM_PER_SHOT: number = 7;
let coffeeBeans: number = 0;
```

이제 샷, 우유, 커피콩이 모두 준비되었다. makeCoffee 머신의 내부동작을 만들어보자. makeCoffee는 coffeeBeans가 충분히 모였다면 작동할 수 있다. coffeeBeans가 부족하다면 Error를 리턴하고 충분하다면 CoffeeCup을 리턴한다.

```ts
function makeCoffee(shots:number):CoffeeCup{
  if(coffeeBeans < shots * BEANS_GRAMM_PER_SHOT){
    throw new Error("커피콩이 부족합니다!");
  }
  return {
    shots,
    hasMilk:false;
  }
}
```

이제 makeCoffee를 호출해보자. 함수를 호출하려고 하면 오류가 발생할 것이다. 위에서 우리는 coffeeBeans의 개수를 0으로 설정했기 때문이다. coffeeBeans의 수량을 늘려야 한다. 샷 3개를 뽑을 수 있을만큼 coffeeBeans의 개수를 설정하고 커피 2개를 뽑아보자.

```ts
coffeeBeans += 3 * BEANS_GRAMM_PER_SHOT;
const coffee = makeCoffee(2);
console.log(coffee);
```

이제 에러없이 출력되는 것을 확인할 수 있다.

절차지향적 프로그래밍을 하면서 불편한 사항들이 있을 것이다. 필요한 상수와 데이터 함수들 이 모든 것들이 밖에서 나뒹굴고 있다. 이를 개선하기 위해 이제부터 객체지향적 프로그래밍을 통해 이 코드를 개선해볼 것이다.

---

### 객체지향적으로 커피머신 만들기

OOP를 이용해서 다시 한번 커피머신을 구현해보자. 객체지향이기 때문에 `object`를 이용하여 커피 머신을 만들어야 한다. 그리고 커피머신이라는 `class`를 구현해야 한다. 커피 머신에는 무엇이 필요할까? coffeeBeans라는 프로퍼티가 필요하고 커피를 만들 수 있는 makeCoffee가 필요하다. 커피 머신이라는 클래스를 만들고 이 클래스를 이용한 인스턴트 커피머신이라는 객체를 만들어 커피를 만들어보자.