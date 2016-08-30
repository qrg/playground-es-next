'use strict';

// [JavaScript の ジェネレータ を極める！ - Qiita](http://qiita.com/kura07/items/d1a57ea64ef5c3de8528)

function* gfn1() {
  yield*[1, 3, 5];
}
const g1 = gfn1();

// console.log(g1.next()); // { value: 1, done: false }
// console.log(g1.next()); // { value: 3, done: false }
// console.log(g1.next()); // { value: 5, done: false }
// console.log(g1.next()); // { value: undefined, done: true }

function* gfn2() {
  yield* "　お　な　か　す　い　た　🍣　";
}
const g2 = gfn2();

console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
