'use strict';

import test from 'ava';
import asyncFn from './async-fn';

test(async t => {
  const result = await asyncFn();
  t.is(result, 'async fn value');
});
