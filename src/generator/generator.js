'use strict';

function* generator() {
  let a = yield ((...args) => { return console.log(args); })();
  console.log('yielded a: ', a);
  let b = yield 2;
  console.log('yielded b: ', b);
  let c = yield 3;
  console.log('yielded c: ', c);
  return 4;
}

let gen = generator();

console.log('next 1   : ', gen.next());
console.log('next 2   : ', gen.next(10));
console.log('next 3   : ', gen.next(20));
console.log('next 4   : ', gen.next(30));


// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/function*
// const example2 = () => {
//   function* idMaker() {
//     var index = 0;
//     while (true)
//     yield index++;
//   }
//
//   var gen = idMaker();
//
//   console.log(gen.next().value); // 0
//   console.log(gen.next().value); // 1
//   console.log(gen.next().value); // 2
// }
//
// const example3 = () => {
//   function* generator1(i) {
//     yieldi + 1;
//     yieldi + 2;
//     yieldi + 3;
//   }
//
//   function* generator2(i) {
//     yield i;
//     yield* generator1(i);
//     yieldi + 10;
//   }
//   var gen = generator2(1);
//
//   console.log(gen.next().value);
//   console.log(gen.next().value);
//   console.log(gen.next().value);
//   console.log(gen.next().value);
//   console.log(gen.next().value);
// }
