'use strict';

// [JavaScript の イテレータ を極める！ - Qiita](http://qiita.com/kura07/items/cf168a7ea20e8c2554c6)

const obj = {}; // イテラブルなオブジェクト
obj[Symbol.iterator] = function () {
  const iterator = {}; // イテレータ
  let count = 1;
  iterator.next = () => {
    return (count <= 10)
      ? {value: count++, done: false}
      : {value: undefined, done: true};
  };
  return iterator;
};

const iterator = obj[Symbol.iterator](); // イテラブルなオブジェクトからイテレータを取得する
let iteratorResult;

console.log('\nwhile');

while (true) {
  iteratorResult = iterator.next(); // 順番に値を取りだす
  if (iteratorResult.done) break; // 取り出し終えたなら、break
  console.log(iteratorResult.value); // 値をコンソールに出力
}

console.log('\nfor of');

for(let v of obj) console.log(v);
