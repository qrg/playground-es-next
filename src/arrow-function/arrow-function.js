'use strict';

import fs from 'fs';

// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/arrow_functions
// 基本構文:
//(param1, param2, paramN) => { statements }
//(param1, param2, paramN) => expression
// これと同じ:  => { return expression; }

// 引数がひとつしかないときには丸かっこ()はオプションです:
//singleParam => { statements }
//singleParam => expression

// 引数がないときには丸かっこ()が必要です:
// () => { statements }

// Advanced:
// object literal表現を返すときにはbody全体を丸かっこ()で囲む:
//params => ({foo: bar})

// Rest parameters をサポートします。
// (param1, param2, ...rest) => { statements }

const log = (str) => console.log(`LOG: ${str}`);

log('a');

const read = (path) => {
  return (callback) => {
    fs.readFile(path, 'utf-8', callback);
  };
};

const readPackageJson = read(`${__dirname}/../../package.json`);

readPackageJson((err, data) => {
  if (err) return console.error(err);
  return console.log(data.toString());
});

// // アロー関数が実装された - JS.next http://js-next.hatenablog.com/entry/2014/07/23/173147
// console.log([1, 2, 3].map(function(v) {
//   return v * v;
// })); // [1, 4, 9]
//
// //アロー関数だとこうなるが、
// console.log([1, 2, 3].map((v) => {
//   return v * v;
// })); // [1, 4, 9]
//
// //引数が一つの時には「()」を省略できるので、こう書ける。
// console.log([1, 2, 3].map(v => {
//   return v * v;
// })); // [1, 4, 9]
//
// //さらに、関数bodyが1つのreturn文の時はブロックと「return」を省略できる。
// console.log([1, 2, 3].map(v => v * v)); // [1, 4, 9]
