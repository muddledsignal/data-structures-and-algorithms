'use strict';

let reverseArray = arr => {
  let revArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    revArr.push(arr[i]);
  }

  arr = revArr;
  return arr;
};
