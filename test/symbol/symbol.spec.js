import 'babel-polyfill';
import Assert from 'assert';
import Symbol from '../../exercises/symbol/symbol';

// This file must not be modified => thanks for doing theses exercises correctly and seriously ;)

describe('Symbol ES6 comprehension', () => {

  it('return an array', () => {
    Assert.deepEqual(Symbol({a:8, b:9, c: 'SFEIR'}), ['a: 8', 'b: 9', 'c: SFEIR']);
  });
});