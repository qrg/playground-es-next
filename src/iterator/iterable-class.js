'use strict';

// https://github.com/sindresorhus/conf/blob/11d9771d83358950560a7d3348345776b045098f/index.js#L97

class Conf {
  constructor() {
    this.store = {
      a: 'a value',
      b: 'b value',
      c: 1
    };
  }

  * [Symbol.iterator]() {
    yield Object.entries(this.store);
  }
}

const conf = new Conf();

console.log(...conf);
