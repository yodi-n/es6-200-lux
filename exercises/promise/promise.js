/**
 * @name promise#promiseResolve
 * @type {function}
 * @description Test if resolve promise has understood
 * @returns {Promise<any>}
 */
const promiseResolve = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('I love ES6');
    }, 500);
  });

};

/**
 * @name promise#promiseReject
 * @type {function}
 * @description Test if reject promise has understood
 * @returns {Promise<any>}
 */
const promiseReject = () => {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      reject('I hate rejection');
    }, 500);
  });
};

/**
 * @name promise#promiseChained
 * @type {function}
 * @description Test if chane promises has understood
 * @returns {Promise<any>}
 */
const promiseChained = () => {
  return new Promise((resolve, reject) => {
    promiseResolve()
      .then((value) => resolve(`${value} and SFEIR`));
  });
};

export default {
  promiseResolve,
  promiseReject,
  promiseChained,
}