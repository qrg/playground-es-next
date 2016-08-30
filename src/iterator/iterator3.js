'use strict';

// [JavaScript の イテレータ を極める！ - Qiita](http://qiita.com/kura07/items/cf168a7ea20e8c2554c6)

console.log('\n-----');
console.log('配列の要素をひとつひとつコンソールに出力する');
const ary1 = [0, 5, 9, 2, 7];
for (let v of ary1) console.log(v);

console.log('\n-----');
console.log('配列をコピーする');
const ary2 = [1, 2, 3];
const ary3 = [...ary2];
console.log(ary2.join() === ary3.join()); // true
console.log(ary2 === ary3); // false

console.log('\n-----');
console.log('配列の最初の要素を代入する');
const ary4 = ['A', 'B', 'C'];
const [firstOfAry4] = ary4;
console.log(firstOfAry4); // 'A'

console.log('\n-----');
console.log('文字列の最初の文字を代入する');
const str = 'ABC';
const [firstOfStr] = str;
console.log(firstOfStr); // 'A'

console.log('\n-----');
console.log('配列から重複した値を削除する');
const ary5 = [0, 5, 9, 0, 2, 5];
const uniqueAry = [...new Set(ary5)];
console.log(uniqueAry); // [ 0, 5, 9, 2 ]

console.log('\n-----');
console.log('.apply()を使わずに関数に可変長の引数を渡す');
const nums = [112, 105, 121, 111];
console.log(Math.max(...nums)); // 121
console.log(String.fromCharCode(...nums)); // 'piyo'

console.log('\n-----');
console.log('マッチした文字と、部分マッチした文字を一気に代入する');
const [all, part] = 'abcde'.match(/ab(.)de/)
console.log(all, part); // 'abcde', 'c'
