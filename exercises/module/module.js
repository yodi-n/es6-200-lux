/**
 * @name module#name
 * @description test if export named has understood
 * @type {string}
 */
export const name = 'ES6 <3';

/**
 * @name module#beautifulName
 * @type {function}
 * @description test if default export has understood
 * @param {string} name
 * @returns {string}
 */
const beautifulName = (name) => {
  return `${name}, you have a beautiful name`;
};

export default {
  beautifulName,
};

