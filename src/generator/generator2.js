'use strict';

// [JavaScript の ジェネレータ を極める！ - Qiita](http://qiita.com/kura07/items/d1a57ea64ef5c3de8528)

console.log('ジェネレータを使って1～20の数を順番に取り出すfor-of文');
function* gfn(from, to){
  while(from <= to) {
    yield from++;
  }
}
const g = gfn(1, 20);
for(const num of g) {
  console.log(num);
}
