import 'babel-polyfill';
import Assert from 'assert';
import GetUser from '../../exercises/async-await/async-await';

describe('Async/Await ES6 Comprehension', () => {

    it('should return an array', async () => {
        let myResponse;
        try {
            myResponse = await GetUser();
        } catch (error) {
            console.log(error);
        }
        Assert.equal(myResponse.userId, 1);
  });
});