'use strict';

// http://jxck.hatenablog.com/entry/2014-01-12/generator-screencaset

const co = (gen) => {
  const g = gen();
  const done = (err, data) => {
    if (err) {
      return g.throw(err);
    }
    const n = g.next(data);
    if (n.done) {
      return;
    }
    n.value(done);
  };

  return () => g.next().value(done);
}

const thunkify = (fn) => {
  return (...args) => {
    return (callback) => {
      args.push(callback);
      fn(...args);
      console.log(args);
    }
  };
}

// ============================================

import fs from 'fs';
import 'babel-polyfill';

co(function* generator() {
  const read = thunkify(fs.readFile);
  try {
    const prefix = './sample/';
    const filename = 'a.txt';
    const path = `${prefix}${filename}`;

    let b = yield read(path, 'utf-8');
    b = `${prefix}${b.replace('\n', '')}`;

    let c = yield read(b, 'utf-8');
    c = `${prefix}${c.replace('\n', '')}`;

    let d = yield read(c, 'utf-8');
    d = `${prefix}${d.replace('\n', '')}`;

    let result = yield read(d, 'utf-8');
    result = result.replace('\n', '');
    console.log(result);
  } catch (err) {
    console.error(err);
  }
})();
