import 'babel-polyfill';
import Assert from 'assert';
import { Cat } from '../../exercises/class/cat';

describe('Classes ES6 comprehension', () => {

  it('should return Meowww', () => {
    const cat = new Cat('Noiraud', 'Meowww');
    Assert.strictEqual(cat.catScream(), 'Meowww');
  });

  it('should return name of cate', () => {
    const cat = new Cat('Claudius', 'GRRRRRR');
    Assert.strictEqual(cat.name, 'Claudius');
    Assert.strictEqual(cat.type, 'cat');
  });
});