import 'babel-polyfill';
import Assert from 'assert';
import Promise from '../../exercises/promise/promise';

// This file must not be modified => thanks for doing theses exercises correctly and seriously ;)

describe('Promise ES6', () => {

  it('should resolve after 500ms I love ES6', (done) => {
    Promise.promiseResolve()
      .then((value) => {
        Assert.strictEqual(value, 'I love ES6');
      })
      .then(done);
  });

  it ('should resolve after 500ms I hate rejection', (done) => {
    Promise.promiseReject()
      .catch((error) => {
        Assert.strictEqual(error, 'I hate rejection');
      })
      .then(done)
  });

  it('should resolve I love ES6 and SFEIR', (done) => {
    Promise.promiseChained()
      .then((value) => {
        Assert.strictEqual(value, 'I love ES6 and SFEIR');
      })
      .then(done);
  });
});