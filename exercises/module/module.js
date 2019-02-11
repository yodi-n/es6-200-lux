/**
 * @name module#name
 * @description Test if export named has understood
 * @type {string}
 */

// Export the variable name and transforme it to a constant as a named export
export const name = 'ES6 <3';


/**
 * @name module#beautifulName
 * @type {function}
 * @description Test if default export has understood
 * @param {string} name
 * @returns {string}
 */
const beautifulName = (name) => {
  return `${name}, you have a beautiful name`;
};

export default {
  beautifulName
}


/**
 * Export beautifulName as a default export
 */


