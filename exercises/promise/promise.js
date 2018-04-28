/**
 * @name promise#promiseResolve
 * @type {function}
 * @description function which let to test if resolve promise has understood
 * @returns {Promise<any>}
 */
const promiseResolve = () => {
  /**
   * This function must be return a resolved Promise with the following string value: 'I love ES6' after 500ms
   */
};

/**
 * @name promise#promiseReject
 * @type {function}
 * @description function which let to test if reject promise has understood
 * @returns {Promise<any>}
 */
const promiseReject = () => {
  /**
   * This function must be return a rejected Promise with the following string value: 'I hate rejection' after 500ms
   */
};

/**
 * @name promise#promiseChained
 * @type {function}
 * @description function which let to test if
 * @returns {Promise<any>}
 */
const promiseChained = () => {
  /**
   * This function must return a resolved promise with the following string: 'I love ES6 and SFEIR'
   * For that you must add the string 'and SFEIR' after 'promiseResolve' (first exercise) has resolved
   * You must chain the promise for doing this exercise
   */
};

export default {
  promiseResolve,
  promiseReject,
  promiseChained,
}