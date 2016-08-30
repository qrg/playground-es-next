'use strict';

// Iterators and generators - JavaScript | MDN https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators

function* idMaker(index){
  while(true)
    yield index++;
}

const gen = idMaker(0);

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
