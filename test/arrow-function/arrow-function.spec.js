import 'babel-polyfill';
import Assert from 'assert';
import ArrowFunction from '../../exercises/arrow-function/arrow-function';

// This file must not be modified => thanks for doing theses exercises correctly and seriously ;)

describe('ES6 Arrow Function', () => {

  it('should return name', () => {
    const name = 'Nicolas';
    Assert.strictEqual(ArrowFunction.simpleValue(name), name);
  });

  it('should return {doubleFirst: 4, doubleSecond: 10}', () => {
    const object = {
      first: 2,
      second: 5,
    };
    Assert.deepStrictEqual(ArrowFunction.objectValue(object, 2), {doubleFirst: 4, doubleSecond: 10});
  });

  it('should return [2,4]', () => {
    const array = [1,2,3,4];
    ArrowFunction.caseOfThis(array);
    Assert.deepStrictEqual(ArrowFunction.caseOfThis(array), [2,4]);
  });
});