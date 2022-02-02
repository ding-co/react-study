import React from 'react';

// const loadStatus = () => 'success - ready';

// const loadStatus = () => {
//   throw new Error('something went wrong');
// };

// const loadStatus = () => {
//   console.log('load status');
//   throw new Promise((resolves) => setTimeout(resolves, 3000));
// };

// function safe(fn) {
//   try {
//     fn();
//   } catch (error) {
//     if (error instanceof Promise) {
//       error.then(() => safe(fn));
//     } else {
//       throw error;
//     }
//   }
// }

const loadStatus = (function () {
  let error, response;

  const promise = new Promise((resolves) => setTimeout(resolves, 3000))
    .then(() => (response = 'Success'))
    .catch((e) => (error = e));

  return function () {
    if (error) throw error;
    if (response) return response;
    throw promise;
  };
})();

export default function Status() {
  const status = loadStatus();
  return <h1>Status: {status}</h1>;
}
