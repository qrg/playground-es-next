'use strict';

const wait = async () => {
  return new Promise(resolve => {
    setTimeout(() => {
      return resolve('async fn value');
    }, 1000);
  });
};

export default async function () {
  return await wait();
}
