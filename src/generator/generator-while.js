'use strict';

import fs from 'fs';

const PREFIX = './sample/';
const read = (file) => {
  fs.readFile(PREFIX + file, 'utf-8', (err, data) => {
    if (err) {
      return console.error(err);
    }
    data = data.replace('\n', '');
    console.log(data);
    g.next(data);
  })
};

const gfn = function*(file) {
  try {
    let y = yield read(file);
    while (y !== 'goal.') {
      y = yield read(y);
    }
  } catch (err) {
    console.error(err);
  }
};

const g = gfn('a.txt');
g.next();
