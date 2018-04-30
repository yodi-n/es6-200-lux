import 'babel-polyfill';
import Assert from 'assert';
import GetListTodo from '../../exercises/async-await/async-await';

describe('Async/Await ES6 Comprehension', () => {

  it('should return an array', async () => {
    let myResponse;
    try {
      myResponse = await GetListTodo();
    } catch (error) {
      console.log(error);
    }
    Assert.equal(myResponse.status, 200);
  });
});