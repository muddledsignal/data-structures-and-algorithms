'use strict';

const arrayShift = require('../array_shift.js');

describe('array_shift.js', () => {
  it('should return odd length array with value in center index', () => {
    expect(arrayShift.insertShiftArray([2,4,6,8], 5)).toEqual([2,4,5,6,8]);
  });

  it('should return even length array with value just right of center index', () => {
    expect(arrayShift.insertShiftArray([4,8,15,23,42], 16)).toEqual([4,8,15,16,23,42]);
  });

  it('should return null if array is empty', () => {
    expect(arrayShift.insertShiftArray([], 3)).toBeNull();
  });

  it('should return null if array input is not an array', () => {
    expect(arrayShift.insertShiftArray(('This is not an array!'))).toBeNull();
  });
});