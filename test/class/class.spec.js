import 'babel-polyfill';
import Assert from 'assert';
import { Cat } from '../../exercises/class/cat';

// This file must not be modified => thanks for doing theses exercises correctly and seriously ;)

describe('Classes ES6 comprehension', () => {

  it('should return Meowww', () => {
    const cat = new Cat('Noiraud', 'Meowww','cat');
    Assert.strictEqual(cat.catScream(),'Meowww');
  });

  it('should return name and type of cate', () => {
    const cat = new Cat('Minou', 'GRRRRRRRR','cat');
    Assert.strictEqual(cat.name, 'Minou' );
    Assert.strictEqual(cat.type, 'cat');
  });
});