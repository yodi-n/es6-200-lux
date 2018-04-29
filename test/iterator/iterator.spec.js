import 'babel-polyfill';
import Assert from 'assert';
import { iteratorArray, iteratorObject, generatorFunction} from "../../exercises/iterator/iterator";

describe('Iterator ES6 compréhension', () => {

  it('should return size of iterator = 5', () => {
    Assert.deepStrictEqual(iteratorArray(5).size, 5);
  });

  it('should return if iterator has 5', () => {
    Assert.deepStrictEqual(iteratorArray(5).has(5), true);
  });

  it('should return \'your lastName\'', () => {
    const name = 'Nicolas';
    const lastName = 'FRIZZARIN';
    Assert.strictEqual(iteratorObject(name, lastName).get(name), lastName);
  });

  it('should return 13', () => {
    Assert.deepStrictEqual(generatorFunction(2), 13);
  });
});