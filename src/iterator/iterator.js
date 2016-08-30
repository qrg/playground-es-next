'use strict';

// [JavaScript の イテレータ を極める！ - Qiita](http://qiita.com/kura07/items/cf168a7ea20e8c2554c6)

const iterator = {};
iterator.next = function(){
  return { value: 42, done: false };
};

console.log(iterator);
console.log(iterator.next());
