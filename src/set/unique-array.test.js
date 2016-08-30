'use strict';

import test from 'ava';

// http://www.2ality.com/2016/05/six-nifty-es6-tricks.html
import sut from './unique-array';

test('uniqueArray(array) returns array which has only unique elements', t => {
  const array = [1, 1, 'a', 'a', 2, 'a', null, null, undefined, undefined, false, false];
  const uniqueArray = [1, 'a', 2, null, undefined, false];
  const isSameElement = (e, i) => e === uniqueArray[i];
  t.true(sut(array).every(isSameElement));
});
