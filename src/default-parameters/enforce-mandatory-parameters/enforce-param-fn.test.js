'use strict';

require('babel-register');

import test from 'ava';

// http://www.2ality.com/2016/05/six-nifty-es6-tricks.html
import enforceParamFn from './enforce-param-fn';

test('enforceParamFn() with no parameters should throw Error', t => {
  t.throws(() => { enforceParamFn(); });
});

test('enforceParamFn(1) with any parameters should not throw Error', t => {
  t.notThrows(() => { enforceParamFn(1); });
});
