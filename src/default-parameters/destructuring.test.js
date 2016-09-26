'use strict';

import test from 'ava';
import fn from './destructuring';

test('should return modified associative array from default parameters', t => {
  const result = fn({b: 'b-modified-value'});
  t.is(result.a, 'a-default-value');
  t.is(result.b, 'b-modified-value');
});
