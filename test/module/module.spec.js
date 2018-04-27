import 'babel-polyfill';
import Assert from 'assert';
import Module, { name } from "../../exercises/module/module";

describe('Module ES6 compréhension', () => {

  it('should return ES6 <3', () => {
    Assert.strictEqual(name, 'ES6 <3');
  });

  it('should return a \'your firstname\', you have a beautiful name', () => {
    Assert.strictEqual(Module.beautifulName('Nicolas'), 'Nicolas, you have a beautiful name')
  });

});