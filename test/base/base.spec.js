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

  it('should return 2Plop3', () => {
    Assert.equal(Base.restParams(2,'Plop', 'banana', {hello:'hello'},34), '2Plop3')
  });

  it('should return [1,2,3,4]', () => {
    const array = [1,2,3];
    Assert.deepStrictEqual(Base.spreedOperatorArray(array), [1,2,3,4]);
  });

  it('should return {fruit: \'banana\', country: \'Guadeloupe\'}', () => {
    const object = {
      country: 'Guadeloupe',
    };
    Assert.deepEqual(Base.spreedOperatorObject(object), {fruit: 'banana', country:'Guadeloupe'});
  });

  it('should return [2,1]', () => {
    const array = [1,2];
    Assert.deepStrictEqual(Base.destructArray(array), [2,1]);
  });

  it('should return banana', () => {
    const object = {
      fruit: 'banana',
      country: 'Guadeloupe',
    };
    Assert.equal(Base.destructObject(object), 'banana');
  });

  it('should return Macedoine', () => {
    const array = ['Macedoine', 'United States'];
    Assert.strictEqual(Base.destructArrayFunction(array), 'Macedoine');
  });

  it('should return your name', () => {
    const name = 'Nicolas';
    const object = {
      name,
      email: 'sfeir@sfeir.com',
    };
    Assert.strictEqual(Base.destructObjectFunction(object), name);
  });
});