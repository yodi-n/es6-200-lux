import 'babel-polyfill';

/**
 * @name base#variableDeclaration
 * @type {function}
 * @description function which let to create a variable with new syntax
 * @returns {string} banana
 */
const variableDeclaration = () => {
  let banana = 'banana';
  return banana;
};


/**
 * @name base#scopeUsed
 * @type {function}
 * @description function which let to test if variable scope has understood
 * @returns {string} banana
 */
const scopeUsed = () => {
  let banana  = 'banana';
  if (banana === 'banana') {
    const apple = 'apple';
    banana = apple;
  }
  return banana;
};

/**
 * @name base#templateString
 * @type {function};
 * @description function which let to test if template string has understood
 * @returns {string} templateString
 */
const templateString = () => {
  const hello = "Hello";
  const student = "Student";
  return `${hello} ${student} welcome to ES6 Sfeir School`;
}

/**
 * @name base#enhancedObjectSimple
 * @type {function}
 * @description function wich let to test if bascic enhancedObject has understood
 * @returns {Object}
 */
const enhancedObjectSimple = () => {
  const x = 45;
  const y = 54;
  return {x,y};
}

/**
 * @name base#enhancedObjectParams
 * @description function which let to test if enhancedObject with params has understood
 * @param {*} name 
 * @returns {Object}
 */
const enhancedObjectParams = (name) => {
  const object = {
    hello: 'hello',
    ['world_' + name]: `world ${name}`,
  };
  return object;
}

export default {
  variableDeclaration,
  scopeUsed,
  templateString,
  enhancedObjectSimple,
  enhancedObjectParams,
};
