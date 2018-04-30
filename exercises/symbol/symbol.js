/**
 * @type {function}
 * @description Test if Symbol has understood
 * @param object
 * @returns {*[]}
 */
export default (object) => {
  object[Symbol.iterator] = function* () {
    for (let key in this) {
      yield `${key}: ${this[key]}`;
    }
  };
  return [...object];
};
