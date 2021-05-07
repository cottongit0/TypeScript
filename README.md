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

# OOP - 커피머신 만들기

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
const BEANS_GRAM_PER_SHOT: number = 7;
let coffeeBeans: number = 0;
```

이제 샷, 우유, 커피콩이 모두 준비되었다. makeCoffee 머신의 내부동작을 만들어보자. makeCoffee는 coffeeBeans가 충분히 모였다면 작동할 수 있다. coffeeBeans가 부족하다면 Error를 리턴하고 충분하다면 CoffeeCup을 리턴한다.

```ts
function makeCoffee(shots:number):CoffeeCup{
  if(coffeeBeans < shots * BEANS_GRAM_PER_SHOT){
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
coffeeBeans += 3 * BEANS_GRAM_PER_SHOT;
const coffee = makeCoffee(2);
console.log(coffee);
```

이제 에러없이 출력되는 것을 확인할 수 있다.

절차지향적 프로그래밍을 하면서 불편한 사항들이 있을 것이다. 필요한 상수와 데이터 함수들 이 모든 것들이 밖에서 나뒹굴고 있다. 이를 개선하기 위해 이제부터 객체지향적 프로그래밍을 통해 이 코드를 개선해볼 것이다.

```ts
type CoffeeCup = {
  shots: number;
  hasMilk: boolean;
};

const BEANS_GRAM_PER_SHOT: number = 7;
let coffeeBeans: number = 0;

function makeCoffee(shots: number): CoffeeCup {
  if (coffeeBeans < shots * BEANS_GRAM_PER_SHOT) {
    throw new Error("커피콩이 부족합니다.");
  }
  coffeeBeans -= shots * BEANS_GRAM_PER_SHOT;
  return {
    shots,
    hasMilk: false,
  };
}
coffeeBeans += 3 * BEANS_GRAM_PER_SHOT;
const coffee = makeCoffee(2);
console.log(coffee);
```

---

## 객체지향적으로 커피머신 만들기

OOP를 이용해서 다시 한번 커피머신을 구현해보자. 객체지향이기 때문에 `object`를 이용하여 커피 머신을 만들어야 한다. 그리고 커피머신이라는 `class`를 구현해야 한다. 커피 머신에는 무엇이 필요할까? coffeeBeans라는 프로퍼티가 필요하고 커피를 만들 수 있는 makeCoffee가 필요하다. 커피 머신이라는 클래스를 만들고 이 클래스를 이용한 인스턴트 커피머신이라는 객체를 만들어 커피를 만들어보자.

### Class와 Static

class는 서로 관련있는 데이터와 함수들을 묶는 기능을 한다. class 안에는 커피에 관련된 모든 속성과 함수가 들어가면 된다. 이제부터 타입 아래에 CoffeeMaker라는 class를 생성해보자. class 안에 멤버변수를 작성할 때는 const, let, function 같은 키워드가 필요없다.

```ts
class CoffeeMaker {
  BEANS_GRAM_PER_SHOT: number = 7;
  coffeeBeans: number;

  constructor(coffeeBeans: number) {
    this.coffeeBeans = coffeeBeans;
  }
  makeCoffee(shots: number): CoffeeCup {
    if (coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
      throw new Error("커피콩이 부족합니다.");
    }
    coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
    return {
      shots,
      hasMilk: false,
    };
  }
}
```

속성으로는 상수가 들어 있고 coffeeBeans라는 속성이 들어있다. 함수 안에는 커피를 만들 수 있는 코드가 있다. class 안에 있는 멤버변수에 접근할 때는 이름을 쓰는 것이 아니라 앞에 `this.`를 붙여 접근한다.

```ts
class CoffeeMaker {
  BEANS_GRAM_PER_SHOT: number = 7;
  coffeeBeans: number;

  makeCoffee(shots: number): CoffeeCup {
    if (this.coffeeBeans < shots * this.BEANS_GRAM_PER_SHOT) {
      throw new Error("커피콩이 부족합니다.");
    }
    this.coffeeBeans -= shots * this.BEANS_GRAM_PER_SHOT;
    return {
      shots,
      hasMilk: false,
    };
  }
}
```

CoffeeMaker 안에는 두 가지의 멤버변수가 있고 한 가지의 함수기 있다. class에서 중요한 것은 `constructor`의 사용이다. `constructor`는 클래스를 가지고 object 인스턴스를 만들 때 항상 호출되는 함수이다. 이제 contructor를 만들어보자.

```ts
class CoffeeMaker {
  BEANS_GRAM_PER_SHOT: number = 7;
  coffeeBeans: number;

  constructor() {
    this.coffeeBeans = coffeeBeans;
  }
  //...
}
```

이제 class를 이용하여 object를 생성할 수 있다. `new` 라는 것은 클래스의 인스턴스를 만드는 것이다. `()`는 바로 생성자를 호출한다. 즉 `new`와 class 이름을 이용하면 class를 이용해서 데이터를 담을 수 있는 object를 생성할 수 있다.

```ts
const coffee = new CoffeeMaker();
```

현재 contructor 생성자는 아무런 인자가 주어지지 않은 상태이다. constructor에서도 인자를 전해줄 수 있다. coffeeBeans를 인자로 전달해보자. 이제는 이 class 안에 있는 coffeeBeans를 전달된 인자만큼 설정해줄 수 있다. coffee를 통해 인자를 전해주면 그만큼 커피콩의 개수가 늘어난다.

```ts
class CoffeeMaker {
  BEANS_GRAM_PER_SHOT: number = 7;
  coffeeBeans: number;

  constructor(coffeeBeans: number) {
    this.coffeeBeans = coffeeBeans;
  }
  //...
}
const coffee = new CoffeeMaker(20);
```

선언된 BEANS_GRAM_PER_SHOT은 class에서 정해진 데이터이다. class 내부에서 연결된 정보이고 변하지 않는 상수이다. 하지만 멤버변수로 작성하게 되면 class를 이용해서 만드는 object마다 BEANS_GRAM_PER_SHOT이 들어가게 된다. class에서 한 번 정의되어지고 이 class를 이용한 object 사이에서 공유될 수 있는 데이터는 멤버변수로 두게되면 중복적으로 데이터를 생성시킨다. 이는 메모리를 낭비시킨다. 이 경우 `static`을 이용해 문제를 해결할 수 있다.

만약 `static`을 붙이지 않는다면 인스턴스 혹은 object라고 불리는 인스턴스 레벨이 된다. class 레벨이라고 하는 것은 class와 연결되어 있기 때문에 object마다 만들어지거나 생성되지 않는다. 이제 `static` 데이터를 사용할 때는 this 키워드가 아닌 `class 이름`을 지정해주어야 한다. 즉, class에 있는 BEANS_GRAM_PER_SHOT 이라는 데이터에 접근하게 되는 것이다. object마다 새로 만들어야 하는 데이터라면 `멤버변수`로, class 레벨에서 함께 공유될 수 있는 것이라면 `static`으로 선언해야 한다.

```ts
class CoffeeMaker {
  static BEANS_GRAM_PER_SHOT: number = 7;
  coffeeBeans: number;

  constructor(coffeeBeans: number) {
    this.coffeeBeans = coffeeBeans;
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
const coffee = new CoffeeMaker(20);
console.log(coffee.makeCoffee(2));
```

`static`은 멤버변수 뿐만 아니라 `함수`에서도 적용할 수 있다. 만약 contructor를 호출하지 않고 새로운 커피머신을 만들고 싶다면 makeMachine이라는 새로운 함수를 이용하여 만들어보자. coffeeBeans의 초기값을 받아오하고 coffeeMaker를 만들어서 반환하는 함수이다. 이 함수 안에서 coffeeMaker를 만들어 전달할 수 있을 것이다.

```ts
class CoffeeMaker {
  static makeMachine(coffeeBeans: number): CoffeeMaker {
    return new CoffeeMaker(coffeeBeans);
  }
}
```

그러면 외부에서 class를 만들지 않아도 간단하게 makeMachine이라는 함수를 이용하여 커피머신을 만들 수 있다.

```ts
CoffeeMaker.makeMachine(3);
```

static을 붙이는 것과 붙이지 않은 것에는 차이가 있다. static을 없애면 더이상 class 레벨에 있는 함수를 이용할 수 없으며 만들어진 object 안에서 함수를 호출할 수 있다.

> static을 사용하는 예제는 다양하다. javascipt에서 'Math' 함수를 이용해 보았을 것이다. 이 Math도 class 레벨에 들어가 있다. 그래서 object를 생성하지 않아도 호출할 수 있다. class 레벨에 있는 함수들은 object를 생성하지 않아도 함수를 호출할 수 있다는 차이점이 있다.

---

## OOP - Encapsulation(캡슐화)

만약 외부에서 coffeeBeans의 값을 음수로 설정하면 어떻게 될까? coffeeBeans가 음수가 되어서는 안된다. class 접근을 통해 coffeeBeans의 값을 외부에서 쉽게 수정할 수 있다. 사용자가 잘 이해하고 양수를 집어넣었다면 괜찮겠지만, 모르고 음수를 집어넣었다면 makeCoffee함수는 Error를 발생시킬 것이다. 사용자가 잘못된 값을 넣지 않도록 `캡슐화`가 필요하다.

```ts
maker.coffeeBeans = -35;
```

캡슐화는 외부에서 보이면 안되는 혹은 설정해서는 안되는 것을 은닉하는 것이다. `public`, `private`, `protected`라는 것을 이용하여 다양한 레벨의 정보를 은닉할 수 있다. 따로 작성하지 않으면 디폴트 값으로 public이 설정되어 있다.

class에 있는 BEANS_GRAM_PER_SHOT은 고정된 값으로 수정이 필요없다. 외부에서 조작할 필요없는 데이터이다. 그렇다면 `private`를 이용하여 가릴 수 있다. 그리고 coffeeBeans의 조작도 위험하다. 외부에서 잘못 조작하면 Error를 발생시킬 수 있다. coffeeBeans도 `private`를 이용하여 외부에서 조작하지 못하도록 막아야 한다.

```ts
class CoffeeMaker {
  private static BEANS_GRAM_PER_SHOT: number = 7;
  private coffeeBeans: number;
}
```

beans를 인자로 받아 coffeeBeans를 추가시키는 함수를 만들어보자. 외부에서 직접적으로 설정하는 것이 아닌 함수를 통해 coffeeBeans를 채운다. 함수를 통해 제어하는 덕분에 채우고자 하는 양이 유효한지 확인할 수 있다. 만약 사용자가 실수로 0 이하의 값을 입력하였다면 Error를 반환하도록 만든다. 유효한 값이 들어왔다면 coffeeBeans에 추가한다.

```ts
    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        return new Error("음수는 유효하지 않은 값입니다.");
      }
      this.coffeeBeans += beans;
    }
```

내부의 상태는 `private`라는 비공개 키워드를 이용하여 숨기고, 외부에서는 `public`이라는 fillCoffeeBeans 함수를 이용해서 내부의 상태를 변경할 수 있도록 만들었다. 이러한 함수를 이용하는 덕분에 전달받은 인자가 유효한지 검사할 수 있다. 즉, 조금더 `안정성`을 높여 코딩할 수 있다.

```ts
maker.coffeeBeans = 32; //ERROR!
maker.fillCoffeeBeans(32);
```

`static`이라는 키워드를 붙여서 object를 만들 수 있는 함수를 제공한다면, 보통 `constructor(생성자)`를 이용해서 생성하는 것을 금지하기 위해 사용한다. 이런 경우 `constructor`를 `private`로 만들어서 `static 메소드`를 이용할 수 있도록 권장하는 것이 좋다.

```ts
class CoffeeMaker {
  private constructor(coffeeBeans: number) {
    this.coffeeBeans = coffeeBeans;
  }
  static makeMachine(coffeeBeans: number): CoffeeMaker {
    return new CoffeeMaker(coffeeBeans);
  }
}
const coffee = CoffeeMaker.makeMachine(32);
```

> `protect`는 상속할 때 외부에서는 접근할 수 없지만 이 class를 상속한 자식 class에서만 접근 가능할 수 있도록 설정할 수 있다. 예를 들어 어떤 누구라도 class 외부에서는 coffeeBeans에 접근할 수 없지만 `protected`라고 설정하게 되면 CoffeeMaker를 상속한 다른 class 내에서는 접근이 가능해진다.

---

### getter와 setter

다른 객체지향 개념으로 넘어가기 전, class의 `getter`와 `setter`에 대해 정리해보자. User라는 class는 firstName과 lastName을 갖고 있다. 이 데이터는 constructor를 통해서 firstName과 lastName을 받아올 수 있다. constructor 안에서 멤버변수 데이터를 초기화 시켜아 한다. 그리고 firstName과 lastName을 동시에 갖는 fullName이라는 변수도 선언한다.

```ts
class User {
  firstName: string;
  lastName: string;
  fullName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = `${firstName} ${lastName}`;
  }
}
```

이제 constructor를 호출해보자. 정상적으로 출력되는 것을 확인할 수 있다.

```ts
const user = new User("cotton", "git0");
console.log(user.fullName);
```

이번에는 firstName의 값을 바꿔보자. 하지만 출력 시, contton git0이 출력된다.

```ts
user.firstName = "James";
console.log(user.fullName);
```

fullName이 설정된 뒤에는 firstName과 lastName을 변경하여도 다시 fullName이 계산되지 않는다. 한 번 할당되면 계속 지정된 값을 갖는다. 이런 경우 `getter`를 이용하여 해결할 수 있다. 멤버변수를 바로 선언하고 설정하는 것이 아니라 `get`을 이용하여 fullName을 정의할 수 있다. `get`을 사용하면 함수 형태가 되지만, 접근할 때는 멤버변수에 접근하는 것처럼 작성해야 한다. 이제 fullName을 호출하면 변경된 값이 제대로 출력된다.

```ts
class User {
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
const user = new User("cotton", "git0");
console.log(user.fullName);
user.firstName = "James";
console.log(user.fullName);
```

이번엔 age 값을 받아보자. number타입의 internalAge라는 데이터를 만든다. get age()는 internalAge를 리턴한다. 그리고 set age()를 이용하여 숫자 num을 받아온다. set을 이용하면 this.internalAge를 전달받은 숫자로 설정할 수 있다. User의 internalAge로는 접근할 수 없지만, get과 set을 이용하면 internalAge가 private여도 멤버변수를 전달할 수 있다.

```ts
class User {
  private internalAge: number = 0;
  get age(): number {
    return this.internalAge;
  }
  set age(num: number) {
    this.internalAge = num;
  }
}
user.age = 6;
```

setter와 getter는 일반 멤버변수처럼 사용가능하지만 어떠한 계산을 할 때 유용하게 사용할 수 있다. 조금 더 다양한 연산을 할 수 있고, 이 숫자가 정확한지에 대해 유효성 검사를 할 수 있다.

```ts
    set age(num: number) {
      if(num < 0){
        throw new Error("음수는 설정할 수 없습니다.")
      }
      this.internalAge = num;
    }
```

---

## OOP - Abstraction(추상화)

외부에서 class를 바라봤을 때 인터페이스가 복잡하다. 사용할 수 있는 함수가 많아질수록 사용자는 어떤 함수를 이용해야할지 혼란스러워진다. 이럴 때는 `추상화`를 이용하여 필요한 `interface`만 노출하여 class를 더 쉽게 만들 수 있다.

이제부터 보다 전문적인 커피머신을 만들어보자. 단순히 커피콩을 넣고 샷을 추출하던 커피머신에서 벗어나 다양한 기능을 추가할 것이다. 커피콩을 갈고(grindBeans) 커피머신을 예열하고(preHeat) 그리고 요청된 샷을 추출할 것이다(extract).

먼저 grindBeans()부터 구현해보자. 우리는 이미 makeCoffee에서 grindBeans()를 구현했다. 받아온 shots만큼 뽑을 수 있는 커피콩이 있는지 확인하고 커피콩이 충분히 있다면 샷을 추출한다. 그리고 커피콩에서 사용힌 만큼의 커피콩을 빼준다.

```ts
    grindBeans(shots: number) {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
        throw new Error('커피콩이 부족합니다.');
      }
      console.log(`${shots}개의 커피를 갈고 있습니다.`);
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
    }
```

이번엔 preHeat() 커피머신을 예열시키는 함수를 구현해보자. 이 함수는 console log에 예열되고 있다는 문장만 출력할 것이다.

```ts
    preHeat():void {
      console.log("커피머신을 예열 중입니다. 기다려주세요.");
    }
```

마지막으로 커피를 추출하는 extract() 함수를 만들어보자. 얼마만큼의 커피를 추출할 것인지 출력하고 CoffeeCup을 반환한다.

```ts
    extract(shots: number): CoffeeCup {
      console.log(`${shots}개의 샷을 추출하고 있습니다.`);
      return {
        shots,
        hasMilk: false,
      };
    }
```

이제 우리가 기존에 만들었던 makeCoffee에는 이 3가지 함수가 들어오게 된다.

```ts
    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preHeat();
      return this.extract(shots);
    }
```

이제 함수를 호출해보자. 굉장히 많은 함수들이 눈에 띌 것이다. 우리는 직접 구현해서 어떤 함수를 이용해야 할지 알 수 있다. 하지만 다른 사용자의 입장에서는 어떤 함수를 이용해야 맞는지 어려울 것이다. class에 있는 함수를 읽는다면 이해할 수 있겠지만 복잡한 코드의 경우 너무 오랜 시간이 걸린다. 이 문제를 해결하기 위해 `추상화`를 사용한다.

<img src="./images/abstraction1.png">

`추상화`는 interface를 굉장히 간단하게 만듦으로써 사용하는 사람이 쉽게 이용할 수 있도록 도와준다. 추상화의 방법에는 여러가지 방법이 있다. `캡슐화`를 통해서도 추상화를 할 수 있으며, `interface`를 이용해서도 가능하다. 혹은 interfacr가 없는 경우에는 정보 은닉을 통해서 추상화를 할 수 있다.

먼저 정보 은닉 방법부터 알아보자. 앞서 사용했던 `private`를 이용하면 쉽게 구현할 수 있다. 내부에서 사용하는 동작이므로 외부에서 호출할 필요가 없는 함수에 private를 설정해주는 것이다. 이제 다시 외부에서 호출하려고 하면 fillCoffeeBeans와 makeCoffee 함수만 호출할 수 있다. 이렇게 정말 필요한 함수만 노출해서 양식을 좀 더 간단하게 만드는 것을 추상화라고 한다.

```ts
class CoffeeMaker {
  private grindBeans(shots: number) {}
  private preHeat(): void {}
  private extract(shots: number): CoffeeCup {}
}
```

이번에는 `interface`를 이용하여 추상화해보자. interface는 하나의 계약서이다. 어떤 규약을 갖고 있는지 어떤 행동을 할 수 있는지 명시해둔 것이다.

> interface와 class의 이름을 만들 때, interface라면 'I'를 붙이거나, 구현한 class에 imple를 붙이기도 한다. 혹은 class의 이름을 좀 더 명시적으로 바꾸기도 한다. interface는 외부적으로 사용하는 이름이기 때문에 최대한 간단하게 사용하는 것이 좋다.

```ts
interface CoffeeMaker {
  makeCoffee(shots: number): CoffeeCup;
}
class CoffeeMachine implements CoffeeMaker {}
```

이제 class는 interface의 규격을 따라간다. CoffeeMachine은 interface를 구현한다. 그래서 interface를 구현하는 class에서는 interface에서 규격된 모든 함수를 구현해야 한다. 우리는 이미 makeCoffee()를 구현해두었다. makeCoffee()를 지운다면 에러가 발생할 것이다. `interface에 있는 모든 함수가 class 안에 구현되어 있어야 한다.`

이제 interface를 사용해보자. coffee의 타입은 우리가 이미 구현한 CoffeeMachine이 될 수 있다. 새롭게 coffee2를 만들어보자. coffee2의 타입은 CoffeeMaker 즉, interface를 받아온다. 하지만 아까와 차이점이 있다. 우리가 구현한 CoffeeMaker에는 오직 makeCoffee()라는 함수만 들어가 있다. 그래서 interface에 없는 fillCofeeBeans를 호출하게 되면 에러를 발생시킨다.

```ts
const coffee: CoffeeMachine = CoffeeMachine.makeMachine(32);
coffee.fillCoffeeBeans(32);
coffee.makeCoffee(2);

const coffee2: CoffeeMaker = CoffeeMachine.makeMachine(32);
coffee2.fillCoffeeBeans(32); // ERROR!
coffee2.makeCoffee(2);
```

interface에는 없는 함수를 이용할 수 없다. 따라서 interface를 사용하면 내가 얼마만큼의 행동을 약속하고 보장할 것인지 결정할 수 있다.

우리가 만든 CoffeeMaker는 오직 커피만 만들 수 있다. 커피를 제작하는 것 외에는 다른 기능이 없다. 좀 더 다양한 기능을 추가해보자. 커피머신에 보다 많은 기능을 추가할 것이다. CommercialCoffeeMaker라는 interface를 만든다. 여기에는 커피 전문샵에서 사용하는 커피머신이다. 조금 더 다양한 기능의 API를 추가할 것이다. CommercialCoffeeMaker에는 커피콩을 채울 수 있고(fillCoffeeBeans) 청소도 할 수 있다(clean). 이제 class와 연결해보자.

```ts
interface CommercialCoffeeMaker {
  makeCoffee(shots: number): CoffeeCup;
  fillCoffeeBeans(beans: number): void;
  clean(): void;
}
```

이제 class인 CoffeeMaker는 두 가지 interface의 규약을 따라간다. CoffeeMaker에 우리가 새로 구현할 clean이라는 함수를 추가해주자. 기계를 꺠끗이 청소하는 함수로 console log에 청소 중임을 알리도록 한다.

```ts
class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
  //...
  clean() {
    console.log("커피 머신을 청소 중입니다...");
  }
  //...
}
```

이제 우리가 만든 interface인 CommercialCoffeeMaker를 사용해보자. 우리는 CommercialCoffeeMaker를 통해 커피콩을 채우고 커피를 만들고 청소까지 할 수 있다.

```ts
const coffee3: CommercialCoffeeMaker = CoffeeMachine.makeMachine(32);
coffee3.fillCoffeeBeans(32);
coffee3.makeCoffee(2);
coffee3.clean();
```

이제 새로운 class로 만들어보자. 아마추어 사용자와 프로 바리스타로 나눌 것이다. AmateurUser는 간단한 커피 기계 밖에 이용하지 못하지만, ProBarista는 상업용 커피머신을 이용할 수 있다.

```ts
class AmateurUser {
  constructor(private machine: CoffeeMaker) {}
  makeCoffee() {
    const coffee = this.machine.makeCoffee(2);
    console.log(coffee);
  }
}
class ProBarista {
  constructor(private machine: CommercialCoffeeMaker) {}
  makeCoffee() {
    const coffee = this.machine.makeCoffee(3);
    console.log(coffee);
    this.machine.fillCoffeeBeans(32);
    this.machine.clean();
  }
}
```

이제 AmateurUser class를 사용해보자. 아마추어는 커피만들기 밖에 하지 못한다. 우리가 makeCoffee에 구현했던 사항만 수행한다. 요청된 수만큼의 커피를 갈고 커피머신을 예열하고 샷을 추출한다.

```ts
amateur.makeCoffee();
```

이제 ProBarista를 사용해보자. 상업용 커피머신에는 다양한 기능이 구현되어 있다. 커피를 갈고 예열하고 샷을 추출하고 커피머신을 청소한다. CommercialCoffeeMaker interface에 있는 모든 사항을 수행한 뒤 종료한다.

```ts
pro.makeCoffee();
```

동일한 object의 인스턴스여도 이 object는 두 가지 interface를 구현하기 때문에 AmateurUser와 ProBarista는 CoffeeMachine(class)를 받아오는 것이 아니라 CoffeeMaker와 CommercialCoffeeMaker라는 interface에서 생성자를 받아온다. 그래서 interface에서 규약된 class보다는 조금 더 좁은 범위에 interface에서 규약된 함수들만 접근이 가능하다. 아마추어와 바리스타는 interface가 어떻게 구현되어 있는지 신경쓸 필요없이 interface에 규약된 함수들만 이용해서 생성된 object와 의사소통할 수 있다. 그렇기 떄문에 사용자들은 class의 복잡한 기능을 알 필요가 없다.

---

## OOP - Inheritance(상속)

상속을 이용하면 class를 상속하는 다른 종류의 class를 만들 수 있다. 커퍼머신 class를 상속하는 다른 종류의 커피머신을 만들 수 있게 되는 것이다. 상속을 이용해 다양한 커피기계를 만들어보자.

우유거품을 만들어 카페라떼를 만들 수 있는 머신을 추가해보자. class에 CaffeeLatte를 만든다. BEANS_GRAM_PER_SHOT, constructor, makeCoffee 모든 것 과정이 똑같다. 하지만 우유를 스팀하는 과정만 추가하면 CaffeeLatteMachine을 만들 수 있다. 다른 class를 상속할 때는 `extend`를 이용해야 한다.

```ts
class CaffeeLatteMachine extends CoffeeMachine {}
```

상속을 위해 `extends`를 이용했더니 Error가 발생했을 것이다. 살펴보면 constructor가 private이기 때문에 상속이 안된다고 적혀있다. `public`을 이용하면 상속받은 class는 물론 외부에서도 활용할 수 있다. 외부에서 보이면 안되지만 다른 class가 상속받아야 하는 경우, `protected`를 사용할 수 있다. `protected`는 상속하는 자식 class에서는 접근할 수 있으며 외부에서는 접근이 불가능하다. 외부에서 접근할 것과 접근을 막을 것을 분류하여 public과 protected를 설정해주자. 이제 Error없이 정상적으로 상속을 이용할 수 있다.

```ts
class CoffeeMachine implements CoffeeMaker {
  protected static BEANS_GRAM_PER_SHOT: number = 7;
  private coffeeBeans: number;

  constructor(coffeeBeans: number) {
    this.coffeeBeans = coffeeBeans;
  }
}
```

상속이 되었는지 확인하기 위해 아무것도 구현하지 않은 상태로 카페라떼 머신을 만들어보자.

```ts
const latteMaker = new CaffeeLatteMachine(32);
const coffee = latteMaker.makeCoffee(1);
console.log(coffee);
```

똑같이 커피콩을 갈고 커피머신을 예열하며 샷을 추출한다. 커피머신과 동일하게 출력되는 것을 확인할 수 있다. 이것이 바로 상속이다. 우리는 카페라떼 머신에 우유를 스팀해서 첨가되길 바란다. 상속한 class에서 다른 동작을 하고 싶다면 자식 class에서 부모 class에 있는 함수를 덮어 씌울 수 있다. 이를 `overwriting` 이라고 한다.

부모 class에 있는 makeCofee함수를 overwriting 해보자. 부모 class인 CoffeeMachine에서는 hasMilk의 return값이 false였다. CoffeeLatteMachine은 우유를 사용할 것이니 true값을 리턴하면 된다. 다시 출력해보면 hasMilk가 true로 출력되는 것을 확인할 수 있다.

```ts
class CaffeeLatteMachine extends CoffeeMachine {
  makeCoffee(shots: number): CoffeeCup {
    return {
      shots,
      hasMilk: true,
    };
  }
}
```

자식 class에서 부모에 있는 함수를 이용하고 싶을 때가 있다. const 부모에서 만든 coffee를 이용해보자. 그럴 때는 `super`를 이용하면 상속하는 부모에 있는 함수를 호출할 수 있다. 부모 class에 있는 makeCoffee 함수를 호출하여 기본적인 작업들이 이루어진 후, 만들어진 커피에 우유를 추가할 것이다.

CaffeeLateeMachine에서 쓸 steamMilk를 만들어보자. 내부에서만 작동하며 외부에서 사용할 수 없도록 `private`를 설정해준다. steamMilk는 console에 우유가 스팀 중임을 알리는 로그를 출력시킨다. 그리고 부모에서 만든 coffee를 그대로 이용하면서 hasMilk만 true값으로 바꿔주면 된다.

```ts
class CaffeeLatteMachine extends CoffeeMachine {
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
```

이제 출력해보면 기본적인 모든 과정을 거친 후, 우유를 스팀하고 hasMilk가 true가 된 것을 확인할 수 있다.

상속을 잘 이용하면 `공통적인 기능은 그대로 재사용`하면서 자식 class에서 `특화된 기능을 추가`할 수 있다. 그리고 `super`라는 키워드를 이용하여 부모 class에 있는 함수를 호출하거나 접근할 수 있다.

만약 자식 class에서 또다른 데이터 contructor를 받아올 수 있다면 어떻게 될까. 이번에는 기계의 serialNumber를 받아와보자. 자식 class에서 constructor를 구현하는 경우에는 Error가 발생하며 경고문을 띄운다.

> 파생 클래스의 생성자는 'super' 호출을 포함해야 합니다.

constructor 내부에 super 함수를 작성하면 된다. 하지만 또 빨간 줄이 그이며 경고문이 나온다.

> 1개의 인수가 필요한데 0개를 가져왔습니다.

우리가 만든 CoffeeMachine의 contructor는 coffeeBeans라는 인수를 갖고 있다. 추가적으로 어떤 데이터를 받아올 때는 공통적으로 부모 class에서 필요한 데이터를 받아와야 한다. 부모 class와 같이 constructor에 커피콩을 받아오자. 그리고 우리는 serialNumber도 받아올 것이다. 총 두 가지의 인수를 받는 constructor를 만들었다. 받아온 데이터는 super를 이용하여 전달해주면 앞선 문제가 해결된다.

외부에서 보여줘도 되는 데이터지만, 외부에서 수정하면 안되는 데이터의 경우 public `readonly`를 사용할 수 있다.

```ts
class CaffeeLatteMachine {
  constructor(beans: number, public readonly serialNumber: string) {
    super(beans);
  }
}
```

이제 CaffeeLatteMachine을 호출해보자.

```ts
const latteMaker = new CaffeeLatteMachine(32, "SN-1010");
const coffee = latteMaker.makeCoffee(1);
console.log(coffee);
console.log(latteMaker.serialNumber);
```

CaffeeLatteMachine에 커피콩과 시리얼 넘버 두개의 인자를 전달하고 출력해보면 정상적으로 작동하는 것을 확인할 수 있다.

---

## OOP - Polymorphism(다형성)

class를 상속하고 자신을 class에 맞게 부모의 함수를 다시 구현함으로써 `다형성`을 만들어볼 수 있다. 이번에는 설탕을 넣는 커피머신(SweetCoffeeMaker)를 만들어보면서 `다형성`에 대해 이해해보자.

우선 동일하고 부모 class에 있는 함수를 overwriting을 할 것이다. 동일한 interface를 유지하며 똑같이 CoffeeCup을 리턴한다. 부모 class에 있는 super.makerCoffee를 이용하여 커피를 만들어보자. 반환할 때는 만들어진 커피를 하나씩 풀어서 sugar를 추가하면 된다. 이때 hasSugar를 true로 설정해주면 된다.

```ts
class SweetCoffeeMaker extends CoffeeMachine {
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
```

하지만 아직 CoffeeCup에는 hasSugar가 설정되어 있지 않다. hasSugar를 true로 설정해주면 된다. hasSugar는 `Optional parameter`를 이용해보자. 설탕은 설정할 수도 있고 안할 수도 있다.

```ts
type CoffeeCup = {
  shots: number;
  hasMilk: boolean;
  hasSugar?: boolean;
};
```

각각 다른 3가지의 커피머신을 구현해보았다. CoffeeMachine은 부모 class이고 CaffeLatteMachine과 SweetCoffeeMaker는 CoffeeMachine을 상속한 자식 class이다. 이처럼 `다형성`을 이용하면 한 가지의 class나 한 가지의 interface를 통해서 다른 방식으로 구현한 class를 만들 수 있다.

이제 다형성의 장점을 확인해보자. machines라는 배열을 만들어보자. 이 배열에는 다양한 커피머신이 들어가 있다. 심플한 커피머신, 카페라떼를 만들 수 있는 커피머신, 그리고 설탕을 넣을 수 있는 커피머신이 있다.

```ts
const machines = [
  new CoffeeMachine(16),
  new CaffeeLatteMachine(16, "SN-1010"),
  new SweetCoffeeMaker(16),
  new CoffeeMachine(16),
  new CaffeeLatteMachine(16, "SN-1010"),
  new SweetCoffeeMaker(16),
];
```

machines를 돌면서 각각의 머신을 받아와 console에 출력해볼 것이다. forEach문을 사용하여 makeCoffee를 출력해보자. 배열에 있는 모든 커피머신들이 쭉 돌면서 수행되고 있다는 것을 확인할 수 있다.

```ts
machines.forEach((machine) => {
  console.log("---------------------------------------");
  machine.makeCoffee(1);
});
```

`다형성`의 장점은 내부적으로 구현된 다양한 class들이 한 가지의 interface를 구현하거나 동일한 부모 class를 상속했은 때 동일한 함수를 class별로 구분하지 않고 공통된 API(makeCoffee)를 통해 호출할 수 있다는 점이다.

하지만 API를 사용했을 때 makeCoffee뿐만 아니라 CoffeeMachine에서 public으로 설정한 모든 함수를 사용할 수 있다. 이 범위를 좀 더 좁혀보자. 외부에서는 오직 makeCoffee만 접근할 수 있도록 만들 것이다.

CaffeLatteMachine과 SweetCoffeeMaker는 CoffeMachine의 자식이다. CoffeeMachin은 곧 CoffeeMaker다. 즉 machines는 CoffeeMaker의 배열로 만들 수 있다. CoffeeMaker에는 오직 makeCoffee라는 함수만 존재한다. 이제 machines를 호출하면 makeCoffee밖에 사용하지 못함을 확인할 수 있다.

```ts
const machines: CoffeeMaker[] = [
  //...
];
```

이처럼 다형성은 하나의 인터페이스나 부모의 class를 상속한 자식 class들이 interface와 부모 class에 있는 함수를 `다른 방식으로 다양하게 구성`함으로써 다양하게 만들 수 있음을 의미한다. 이처럼 interface와 부모 class에 있는 동일한 함수 API를 통해서 각각의 구현된 자식 class의 내부 구현사항을 신경쓰지 않고 약속된 한 가지의 API를 호출함으로써 사용하는 사람도 간편하게 다양한 기능을 활용할 수 있도록 도울 수 있다.

---

## OOP - abstract

우리가 어떤 상속 class를 이용할 때, 무언가 반복되는 class에서 절차적으로 진행되는 것이 있고 어떤 특정한 기능만 자식 class에서 행동이 달라진다면 `abstract` class를 만들 수 있다.

CoffeeMaker라는 interface가 있고 CoffeeMachine에 최종 부모class가 있다. 그리고 그것을 상속하는 두 가지의 class가 있다. CoffeeMachine에는 많은 함수들 중에서 makeCoffee라는 함수에서 커피콩을 갈고 가열하고 추출하는 절차가 정해져 있다. extract에서는 설탕이나 우유를 추가할 수 있다.

만약 자식 class에서 `super`를 호출하지 않는 실수를 할 수 있다. shots을 받아와 그냥 커피를 만들 수 있다. 절차적으로 수행되어야 할(커피를 갈고, 머신을 가열하고, 추출하는) 과정들을 놓칠 수 있다. 조금 더 안전하고 절차적으로 코드를 운용하고 싶다면 `abstract` class를 만들어 볼 수 있다.

```ts
class CaffeeLatteMachine extends CoffeeMachine {
  //...
  makeCoffee(shots: number): CoffeeCup {
    this.steamMilk();

    return {
      shots,
      hasMilk: true,
    };
  }
}
```

부모 class은 CoffeeMachine 앞에 `abstract`를 붙여보자. 이제 CoffeeMachine 자체로는 오브젝트를 만들 수 없다. new CoffeeMachine이 에러를 발생시키고 있음을 확인할 수 있다.

> 추상 클래스의 인스턴스를 만들 수 없습니다.

그래서 이 abstract는 만들어지는 것을 목적으로 하지 않고 `부모/추상 클래스로서 필요한 것을 정의`해놓은 것이다.

```ts
abstract class CoffeeMachine implements CoffeeMaker {}
```

이제 abstract class 안에서 추상을 선언할 수 있다. CoffeeMachine안에 있는 함수 중 extract를 이용해보자. 자식 class마다 달라질 수 있는 행동이 있다면 함수 앞에 abstract를 붙일 수 있다. abstract를 붙인 함수는 자식 class마다 다르게 구현해야 할 것이다. 외부에서는 extract만 접근할 수 없기 때문에 접근 제어자인 `protected`를 사용한다.

추상적인 메소드이기 때문에 구현사항은 작성해서는 안된다. 오직 abstract라고만 선언해야 한다.

```ts
abstract class CoffeeMachine implements CoffeeMaker {
  protected abstract extract(shots: number): CoffeeCup;
}
```

이제 다른 자식 class에서 extract를 구현해보자. 더이상 makeCoffee를 overwriting할 필요는 없다. 동일하게 protected를 사용하여 extract 메소드를 구현해보자. super를 호출하여 함수를 만들지 않아도 추상메소드만으로도 구현할 수 있다.

```ts
class CaffeeLatteMachine extends CoffeeMachine {
  //...
  protected extract(shots: number): CoffeeCup {
    this.steamMilk();
    return {
      shots,
      hasMilk: true,
    };
  }
}

class SweetCoffeeMaker extends CoffeeMachine {
  //...
  protected extract(shots: number): CoffeeCup {
    this.getSugar();
    return {
      shots,
      hasMilk: false,
      hasSugar: true,
    };
  }
}
```

이제 CoffeeMachine은 추상 클래스이기 때문에 항상 이것을 구현한 class만 만들 수 있다. 이제 코드를 실행하여 결과값을 확인해보자. 동일하게 작동하는 것을 확인할 수 있다.

```ts
const machines: CoffeeMaker[] = [
  new CaffeeLatteMachine(16, "SN-1010"),
  new SweetCoffeeMaker(16),
  new CaffeeLatteMachine(16, "SN-1010"),
  new SweetCoffeeMaker(16),
];
```

abstract 클래스로 만들어진 클래스는 오브젝트를 사용할 수 없다. 오직 추상적인 클래스이다. 그래서 공통적인 기능들이 있다면 그런 기능들을 다 구현할 수 있다. 이걸 구현하는 클래스마다 달라져야 하는 내용이 있다면 그 부분만 abstract 메소드로 정의할 수 있다. 우리가 interface에서 함수의 규격을 정의한 것처럼 abstract 메소드에서는 함수 이름은 뭔지 어떤 인자를 받아서 어떤걸 리턴하는지만 정의할 수 있다. 구현하는 class마다 달라져야하는 이 abstract 함수만 abstract 클래스를 구현하는 곳에서 구현해주면 된다.

이렇게 abstract 클래스를 이용하면 조금 더 안전하게 우리가 의도한대로 공통적인 기능들을 수행하고 달라져야 되는 것만 상속하는 class에게 꼭 구현해야할 사항을 강조할 수 있다. 상속을 이용할 때는 abstract의 사용을 한 번 고려해보는 것도 좋다.

---

## OOP - composition

`Composition`에 대해 알기 전, `상속에 대한 문제점`을 알 필요가 있다. 흔히들 족보가 꼬인다는 말을 들어봤을 것이다. 상속의 깊이가 점점 깊어질 수록 서로 간의 관계가 복잡해진다. 우리의 만든 커피머신만 봐도 알 수 있다. CoffeMachine이 있고 CaffeLatteMachine과 SweetCoffeeMaker를 상속한다. 만약 우리가 우유거품도 들어갔고 설탕도 들어간 달달한 카페라떼를 만들고 싶다면 어떻게 해야할까? CaffeLatteMachine와 SweetCoffeeMaker를 상속한 새로운 class를 만들 것이다. 이것들이 여러 개 생기게 되면 엄청나게 복잡해질 것이다. 상속의 관계는 `수직적`이기 때문에 부모 class의 행동을 수정하게 되면 수정사항 때문에 모든 자식 class에 영향을 미친다. 새로운 기능을 도입하려 해도 어떻게 상속의 구조를 가져와야 할지 복잡해진다. 제일 큰 문제점은 `타입스크립트에서는 한 가지 이상의 부모 class를 상속할 수 없다!` 즉, 우리가 SweetCaffeLatteMachine을 만들고 싶어도 CaffeLatteMachine와 SweetCoffeeMaker를 상속하는 class를 만들 수 없다. 이러한 상속의 문제점 때문에 `composition`을 사용해야 한다.

> Favor Composition over inheritance!

우리는 상속대신 `composition`을 선호해야 한다. Composition은 `구성`이라는 뜻으로 우리가 레고를 만들 때, 필요한 부품들을 모아 조립해 나가는 것처럼 composition도 `필요한 것들을 가져다 조립`하는 것을 의미한다. 이제 이 composition이 무엇인지 예제를 통해 확인해보자.

> 하지만 상속을 사용하는 것이 나쁜건 아니다. 상속을 이용해서 공통적으로 쓰이는 CoffeeMachine이라는 로직을 다른 여러 자식요소들이 상속함으로써 공통적인 행동들을 재사용이 가능했다. 즉, 상속은 재사용성을 높여준다. 중요한 것은 관계를 상속으로만 만들면 관계가 복잡해질 수 있다. 따라서 불필요한 상속 대신에 composition을 이용하는 것이다.

두 개의 class를 만들어보자. 하나는 저렴한 우유를 거품내는 class(CheapMilkSteamer)와 다른 하나는 설탕을 자동으로 섞어주는 class(AutomaticSugarMixer)를 만들 것이다. CheapMilkSteamer는 steamMilk 함수를 통해 console에 거품을 낸다는 것을 알리고 hasMilk를 true로 반환한다. AutomaticSugarMixer는 getSugar를 통해 설탕을 가져옴을 console에 알려준다. 그리고 true값을 반환한다. addSugar는 CoffeeCup을 인자로 받아오며 CoffeeCup을 반환한다. 그리고 hasSugar를 sugar값(true)로 덮어준다.

```ts
class CheapMilkSteamer extends CoffeeMachine {
  private steamMilk(): void {
    console.log("우유 거품을 내는 중입니다..");
  }
  makeMilk(cup: CoffeeCup): CoffeeCup {
    this.steamMilk;
    return {
      ...cup,
      hasMilk: true,
    };
  }
}
class AutomaticSugarMixer extends CoffeeMachine {
  private getSugar(): boolean {
    console.log("설탕을 가져옵니다.");
    return true;
  }
  addSugar(cup: CoffeeCup): CoffeeCup {
    const sugar = this.getSugar();
    return {
      ...cup,
      hasSugar: sugar,
    };
  }
}
```

우유 거품기와 설탕 제조기를 만들었다. 이제 우유와 설탕이 필요한 곳에서 각각 로직을 반복해서 작성할 필요 없이 `외부에서 주입`받아서 가져올 것이다. 이를 `Dependecy Injection`이라고 부른다. 이제 CaffeLatteMachine과 SweetCoffeeMaker에서 필요한 것을 외부에서 불러와보자.

CaffeLatteMachine에 우유거품을 받아올 변수가 필요하다. milkFother은 CheapMilkSteamer밖에 없다. private로 지정한 후, class의 멤버변수로 만든다. 이제 우리는 CheapMilkSteamer에서 우유거품을 내는 과정을 받아올 수 있다. 이젠 steamMilk를 사용하여 hasMilk값을 바꿔줄 필요가 없다. return.this의 milkFrother가 있는 makeMilk 함수를 통해 우리가 만든 커피를 전달하면 우유거품을 추가해서 새로운 커피를 리턴한다.

```ts
class CaffeeLatteMachine extends CoffeeMachine {
  constructor(
    beans: number,
    public readonly serialNumber: string,
    private milkFother: CheapMilkSteamer
  ) {
    super(beans);
  }
  makeCoffee(shots: number): CoffeeCup {
    const coffee = super.makeCoffee(shots);
    return this.milkFother.makeMilk(coffee);
  }
}
```

SweetCoffeeMaker도 동일하다. AutomaticSugarMixer에서 설탕을 받아올 sugar를 설정해준다. 그리고 makeCoffee에서 this.sugar를 통해 addSugar를 불러온다.

```ts
class SweetCoffeeMaker extends CoffeeMachine {
  constructor(beans: number, private sugar: AutomaticSugarMixer) {
    super(beans);
  }
  makeCoffee(shots: number): CoffeeCup {
    const coffee = super.makeCoffee(shots);
    return this.sugar.addSugar(coffee);
  }
}
```

이렇게 각각의 class에서는 우리가 필요한 것을 매번 구현하는 것이 아니라, `Composition`을 통해각각의 기능별로 class를 따로 만들어 둠으로써 필요한 곳에서 가져다가 쓸 수 있다. 이제 손쉽게 SweetCaffeLatte를 만들 수 있다.

constructor를 이용하여 super에서 필요한 beans 정보를 받아오자. 그리고 CheapMilkSteamer, AutomaticSugarMixer를 통해 우유거품과 설탕을 받아올 것이다. 상속된 이 class에서는 항상 super에 contructor를 호출해주어야 한다. 똑같이 super에 beans를 전달해주면 된다. 이제 makeCoffee라는 함수를 Overwriting 해보자.

먼저 const coffee는 부모에 있는 makeCoffee를 이용해서 기본적인 커피를 만든다. 그리고 반환값으로 우유와 설탕을 전달해주면 된다. milk에 있는 makeMilk함수와 sugar에 있는 addSugar를 이용하여 반환해주면 된다.

```ts
class SweetCaffeLatteMachine extends CoffeeMachine {
  constructor(
    private beans: number,
    private milk: CheapMilkSteamer,
    private sugar: AutomaticSugarMixer
  ) {
    super(beans);
  }
  makeCoffee(shots: number): CoffeeCup {
    const coffee = super.makeCoffee(shots);
    return this.milk.makeMilk(this.sugar.addSugar(coffee));
  }
}
```

만약 위 과정이 복잡하다면 필요한 함수를 정의할 수 있다.

```ts
class SweetCaffeLatteMachine extends CoffeeMachine {
  constructor(
    private beans: number,
    private milk: CheapMilkSteamer,
    private sugar: AutomaticSugarMixer
  ) {
    super(beans);
  }
  makeCoffee(shots: number): CoffeeCup {
    const coffee = super.makeCoffee(shots);
    const sugarAdded = this.sugar.addSugar(coffee);
    return this.milk.makeMilk(sugarAdded);
  }
}
```

Composition을 이용하면 필요한 기능을 가져와서 외부에서 주입받아 필요한 기능을 `재사용`할 수 있다. 하지만 Composition에도 치명적인 단점이 있다.

CaffeLatteMachine과 SweetCoffeeMaker, SweetCaffeLatteMachine 이 3가지는 CheapMilkSteamer와 AutomaticSugarMixer랑 굉장히 타이트하기 이어져 있다. 즉, 앞의 3가지 class는 항상 CheapMilkSteamer와 AutomaticSugarMixer를 이용해야 한다. 나중에 다른 우유거품기와 설탕제조기를 만들었을 때, 이 모든 class가 새로 업데이트되어야 한다. 즉, 항상 CheapMilkSteamer와 AutomaticSugarMixer만 사용할 수 있는 class로 스스로를 제약시킨다. 그래서 `class는 너무 깊게 연관되서는 안된다.`

---

## OOP - 강력한 interface

상속보다 Composition을 더 선호해야 한다. Composition을 통해 복잡한 상속의 수직구조를 피하면서 상속의 레벨을 한 단계로만 유지하면서 코드를 어떻게 재사용할 수 있는지 알아보았다. 하지만 우리가 가져다 쓰는 class가 서로 너무 밀접해지는 문제가 발생했다. 밀접한 관계는 변경이 일어나거나 다른 것으로 대체하고 싶다면 연관된 모든 Class를 업데이트해야 한다. 이번에는 조금 더 확장이 가능하고 유연하게 사용할 수 있는 방법을 알아보자.

Composition을 통해 그럴싸하게 만들었지만 아직 문제가 많다. 각 Class를 한 번 사용해보자.

```ts
const cheeepMilkMaker = new CheapMilkSteamer();
const candySugar = new AutomaticSugarMixer();
const sweetMachine = new SweetCoffeeMaker(12, candySugar);
const latteMachine = new CaffeeLatteMachine(12, "SN-1010", cheeepMilkMaker);
const sweetLatteMachine = new SweetCaffeLatteMachine(
  12,
  cheeepMilkMaker,
  candySugar
);
```

한 눈에 봐도 재사용성이 떨어져 보인다. A브랜드의 우유와 B브랜드의 설탕만 넣을 수 있는 커피머신이 있다. 커피머신에 좀 더 좋은 설탕을 넣거나 고급스러운 우유 거품기를 구입해도 커피머신에 사용할 수 없게 된다. 정말 사용하고 싶다면 커피 기계를 분리해서 다시 만들어야 한다. 만약 이런 커피머신이 있다면 아무도 구입하지 않을 것이다. 그래서 Class들 사이에 서로 상호작용을 하는 경우에는 Class 자신을 노출하는 것이 아니라 계약서를 통해 의사소통해야 한다. 앞서 우리는 `interface`라는 강력한 계약서를 배웠다. interface를 통해 class 간의 의사소통을 조절할 수 있다. 이것이 `디커플링 원칙`이다

이제 우유에 거품을 내고 설탕을 만들 수 있는 각각의 interface를 만들어보자. makeMilk와 addSugar를 재사용한 각각의 interface를 선언한다. 각각 정해진 interface는 계약서 규격 상황에 맞는 함수를 구현한 규격을 따라가는 class다.

```ts
interface MilkFrother {
  makeMilk(cup: CoffeeCup): CoffeeCup;
}

interface SugarProvider {
  addSugar(cup: CoffeeCup): CoffeeCup;
}
```

이제 사용하는 곳에서 class를 받아오는 것이 아니라, interface에서 받아오자. class 간에 커플링되어 있던 것들이 interface를 통해 디커플링되었다. 이제 서로 연결되어 있지않고 interface를 통해 의사소통을 하게 되었다. 이제부터 코드의 재사용성을 극대화할 수 있다.

```ts
class CaffeeLatteMachine extends CoffeeMachine {
  constructor(
    beans: number,
    public readonly serialNumber: string,
    private milkFother: MilkFrother
  ) {
    super(beans);
  } //...
}

class SweetCoffeeMaker extends CoffeeMachine {
  constructor(beans: number, private sugar: SugarProvider) {
    super(beans);
  } //...
}

class SweetCaffeLatteMachine extends CoffeeMachine {
  constructor(
    private beans: number,
    private milk: MilkFrother,
    private sugar: SugarProvider
  ); //...
}
```

이제 interface를 사용하여 다양한 커피머신을 만들어보자.

```ts
class FancyMilkSteamer implements MilkFrother {
  private steamMilk(): void {
    console.log("고급 우유 거품을 내는 중입니다..");
  }
  makeMilk(cup: CoffeeCup): CoffeeCup {
    this.steamMilk;
    return {
      ...cup,
      hasMilk: true,
    };
  }
}

class ColdMilkSteamer implements MilkFrother {
  private steamMilk(): void {
    console.log("차가운 고급 우유 거품을 내는 중입니다..");
  }
  makeMilk(cup: CoffeeCup): CoffeeCup {
    this.steamMilk;
    return {
      ...cup,
      hasMilk: true,
    };
  }
}

class FancySugarMixer implements SugarProvider {
  private getSugar(): boolean {
    console.log("고급 설탕을 가져옵니다.");
    return true;
  }
  addSugar(cup: CoffeeCup): CoffeeCup {
    const sugar = this.getSugar();
    return {
      ...cup,
      hasSugar: sugar,
    };
  }
}
```

동일한 class를 이용함에도 불구하고 sugar를 전달만 해줘도 다른 객체를 만들 수 있다. SweetCoffeeMaker class의 코드를 재사용하면서 원하는 부품을 가져다가 서로 다른 객체를 만들 수 있다. 그래서 내가 원하는 용도에 따라서 SweetCoffeeMaekr를 다르게 사용할 수 있다. 라떼머신들도 마찬가지다. 원하는 기능들을 조립하여 내가 어떤 커피 기계를 만들건지 결정할 수 있다.

```ts
const cheeepMilkMaker = new CheapMilkSteamer();
const fancyMilkMaker = new FancyMilkSteamer();
const coldMilkMaker = new ColdMilkSteamer();

const candySugar = new AutomaticSugarMixer();
const sugar = new FancySugarMixer();

const sweetCandyMachine = new SweetCoffeeMaker(12, candySugar);
const sweetMachine = new SweetCoffeeMaker(12, sugar);

const latteMachine = new CaffeeLatteMachine(12, "SN-1010", cheeepMilkMaker);
const coldLatteMachine = new CaffeeLatteMachine(12, "SN-1010", coldMilkMaker);
const fancyLatteMachine = new CaffeeLatteMachine(12, "SN-1010", fancyMilkMaker);
const sweetLatteMachine = new SweetCaffeLatteMachine(
  12,
  cheeepMilkMaker,
  candySugar
);
```

이제 우리가 원하는 milkMaker와 sugarMaker를 전달할 수 있기 때문에 많은 종류의 커피머신이 필요하지 않다. 즉, 우리가 만들어낸 수많은 자식 class들이 필요가 없어졌다. 이제는 CoffeeMachine 하나만 있으면 모든 커피를 만들 수 있다. CaffeeLatteMachine, SweetCoffeeMaker, SweetCaffeLatteMachine와 같은 커피머신들을 모두 지우고 기본기능(우유거품기, 설탕제조기)들만 남긴다. 이제 CoffeeMachine에 여러 기능들을 추가해보자. 우유거품과 설탕 모두 CoffeeMachine에서 추가할 수 있다.

커피를 만들 때는 앞으로 커피콩, 우유, 설탕을 전달받을 것이다. makeCoffee에서 커피 뿐만 아니라 설탕과 우유도 반환해준다.

```ts
class CoffeeMachine implements CoffeeMaker {
  protected static BEANS_GRAM_PER_SHOT: number = 7;
  private coffeeBeans: number = 0;

  constructor(
    coffeeBeans: number,
    private milk: MilkFrother,
    private sugar: SugarProvider
  ) {
    this.coffeeBeans = coffeeBeans;
  }
  //...
  makeCoffee(shots: number): CoffeeCup {
    this.grindBeans(shots);
    this.preHeat();
    const coffee = this.extract(shots);
    const sugarAdded = this.sugar.addSugar(coffee);
    return this.milk.makeMilk(sugarAdded);
  }
}
```

우리가 커피머신을 만들 때, 어떤 곳에는 우유나 설탕이 들어가지 않는 경우가 있었다. 이런 경우도 충분히 구현할 수 있다. 우유와 설탕을 넣지 않는 새로운 class를 만들어보자. 우유와 설탕은 전달받지 않고 CoffeeCup을 리턴해주면 된다.

```ts
class NoMilk implements MilkFrother {
  makeMilk(cup: CoffeeCup): CoffeeCup {
    return cup;
  }
}

class NoSugar implements SugarProvider {
  addSugar(cup: CoffeeCup): CoffeeCup {
    return cup;
  }
}
```

이제 CoffeeMachine을 사용하여 다양한 객체들을 만들 수 있다.

```ts
//우유 거품기
const cheeepMilkMaker = new CheapMilkSteamer();
const fancyMilkMaker = new FancyMilkSteamer();
const coldMilkMaker = new ColdMilkSteamer();
const noMilk = new NoMilk();
//설탕 제조기
const candySugar = new AutomaticSugarMixer();
const sugar = new FancySugarMixer();
const noSugar = new NoSugar();

const sweetCandyMachine = new CoffeeMachine(12, noMilk, candySugar);
const sweetMachine = new CoffeeMachine(12, noMilk, sugar);

const latteMachine = new CoffeeMachine(12, cheeepMilkMaker, noSugar);
const coldLatteMachine = new CoffeeMachine(12, coldMilkMaker, noSugar);
const sweetLatteMachine = new CoffeeMachine(12, cheeepMilkMaker, candySugar);
```

이렇게 상속을 이용하지 않고 composition을 통해 CoffeeMachine으로 우리가 원하는 오브젝트를 만들 수 있다. 내가 원하는 기능을 추가하여 원하는 것들을 가져와 조립하며 사용할 수 있다. 그렇다고 해서 상속이 나쁜 것은 아니다. 상속도 유용하며 꼭 필요한 경우가 있다. 하지만 코드를 짜면서 내가 너무 수직적인 관게를 만들고 있는 건 아닌지 꼭 확인해보아야 한다. 상속의 관계가 지나치게 깊다면 composition을 통해 대체할 수 없는지 확인해보자. composition을 이용해서 조금 더 필요한 기능들을 조립해서 확장이 가능하며 재사용성이 높고 유지보수가 쉬운 코드를 만들 수 있다.

한 가지 유의해야할 점이 있다.

> 오버엔지니어링은 하지 말 것!

타이트한 일정 내에 어떤 기능을 구현해야 할 떄가 있다. 기능 구현보다 코드의 개선에 집중한다면 기간 내에 만들지 못하게 된다. 아직 일어나지도 않은 일을 대비해가며 코드개선에 시간을 투자하지 않아도 된다. 기능을 구현하고 차근차근 개선해 나가는 것이 중요하다.

---
