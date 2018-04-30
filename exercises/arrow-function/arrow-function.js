/**
 * @name arrow-function#simpleValue
 * @type {function}
 * @description Test if return simple value with arrow function has understood
 * @param {string} name
 * @returns {string}
 */
const simpleValue = // Write your code here
/**
 * @name arrow-function#objectValue
 * @type {function}
 * @description Test if return object value with arrow function has understood
 * @param {Object} x
 * @param {number} multiplicateur
 * @returns {{doubleFirst: number, doubleSecond: number}}
 */
const objectValue = // Write your code here

/**
 * @name arrow-function#caseOfThis
 * @type {function}
 * @description Test if context of this has understood
 * @param {array} num
 * @returns {Array}
 */
const caseOfThis = (num) => {
  // Fix these code for test passing
  const object = {
    num,
    even: [],
    each() {
      num.map((value) => {
        if (value % 2 === 0) {
          even.push(value);
        }
      });
    },
  };
  object.each();
  return object.even;
};

export default {
  simpleValue,
  objectValue,
  caseOfThis,
}