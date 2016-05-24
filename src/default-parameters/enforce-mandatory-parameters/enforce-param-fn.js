'use strict';

const mandatory = () => {
  throw new Error('Missing parameter');
};

export default function (param = mandatory()) {
  return param;
}
