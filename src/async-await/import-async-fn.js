'use strict';

import asyncFn from './async-fn';

(async () => {
  const value = await asyncFn();
  console.log('imported:', value);
})();
