'use strict';

import test from 'ava';
import asyncFn from './async-fn';

test('async function should return a correct value', async t => {
  const result = await asyncFn();
  t.is(result, 'async fn value');
});
