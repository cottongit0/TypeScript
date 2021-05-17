console.log(this);

(function simpleFunc() {
  console.log(this);
})();

class Counter {
  count = 0;
  increas = function () {
    console.log(this);
  };
}
const counter = new Counter();
counter.increas();

// const caller = counter.increas;
const caller = counter.increas.bind(counter);
caller();

class Bob {}
const bob = new Bob();
bob.run = counter.increas;
bob.run();
