/**
 * @name arrow-function#simpleValue
 * @type {function}
 * @description Test if return simple value with arrow function has understood
 * @param {string} name
 * @returns {string}
 */
const simpleValue = (name) => name;

/**
 * @name arrow-function#objectValue
 * @type {function}
 * @description Test if return object value with arrow function has understood
 * @param {number} first
 * @param {number} second
 * @param {number} multiplicateur
 * @returns {{doubleFirst: number, doubleSecond: number}}
 */
const objectValue = ({first, second}, multiplicateur) => ({
  doubleFirst: first * multiplicateur,
  doubleSecond: second * multiplicateur
});

/**
 * @name arrow-function#caseOfThis
 * @type {function}
 * @description Test if context of this has understood
 * @param {array} num
 * @returns {Array}
 */
const caseOfThis = (num) => {
  const object = {
    num,
    even: [],
    each() {
      let that = this;
      num.map((value) => {
        if (value % 2 === 0) {
          that.even.push(value);
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