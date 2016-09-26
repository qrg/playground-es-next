'use strict';

export default function fn ({
    a = 'a-default-value',
    b = 'b-default-value'
  } = {}) {

  if (arguments.length === 0) throw new Error('Missing parameter.');
  if (Object.prototype.toString.call(arguments[0]) !== '[object Object]') {
    throw new Error('Argument must be an associative array.');
  }

  return {
    a: a,
    b: b
  }
}
