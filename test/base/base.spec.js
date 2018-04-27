import 'babel-polyfill';
import Assert from 'assert';
import Base from '../../exercises/base/base';

describe('base ES6 comprehension', () => {
  it('should return banana', () => {
    Assert.equal(Base.variableDeclaration(), 'banana');
  });

  it('should return apple', () => {
    Assert.equal(Base.scopeUsed(), 'apple');
  });

  it('should return Hello Student welcome to ES6 Sfeir School', () => {
    Assert.equal(Base.templateString(), 'Hello Student welcome to ES6 Sfeir School');
  });

  it('should return {x:45, y:54}', () => {
    Assert.deepStrictEqual(Base.enhancedObjectSimple(), {x:45, y:54});
  });

  it('should return {hello: \'hello\',world_ES6: \'world ES6\'}', () => {
    const name = 'ES6';
    Assert.deepStrictEqual(Base.enhancedObjectParams(name), {hello: 'hello' ,world_ES6: 'world ES6'});
  });

  it('should return SFEIR', () => {
    Assert.equal(Base.enhancedObjectFunction(), 'SFEIR');
  });

  it('should return 20', () => {
    Assert.deepStrictEqual(Base.defaultParams(4), 20);
  });


});