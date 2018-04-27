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
};

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
};

/**
 * @name base#enhancedObjectParams
 * @description function which let to test if enhancedObject with params has understood
 * @param {string} name 
 * @returns {Object}
 */
const enhancedObjectParams = (name) => {
  const object = {
    hello: 'hello',
    ['world_' + name]: `world ${name}`,
  };
  return object;
};

/**
 * @name base#enhanenhancedObjectFunction
 * @type {function}
 * @description function which let to test if enhancedObject with function has understood
 * @return {string}
 */
const enhancedObjectFunction = () => {
  const object = {
    hello() {
      return 'SFEIR';
    },
  };
  return object.hello();
};

/**
 * @name base#defaultParams
 * @type {function}
 * @description function which let to test if defaultParams in function has understood
 * @param  {Number} x
 * @param  {Number} y
 * @param  {Number}z
 * @returns {Number}
 */
const defaultParams = (x, y = 6, z = 10) => {
  return x + y + z;
};

/**
 * @name base#restParams
 * @type {function}
 * @description function which let to test if restParams in function has understood
 * @param {Number} x
 * @param {String} y
 * @param {*} z
 * @returns {string}
 */
const restParams = (x, y, ...z) => {
    return `${x}${y}${z.length}`;
};

/**
 * @name base#sprredOperatorArray
 * @type {function}
 * @description function which let to test if spreedOperator on Array has understood
 * @param {Array} x
 * @returns {Array}
 */
const spreedOperatorArray = (x) => {
  return [...x, 4];
};

/**
 * @name base#spreedOperatorObject
 * @type {function}
 * @description function which let to test if spreedOperator on object has understood
 * @param x
 * @returns {{fruit: string}}
 */
const spreedOperatorObject = (x) => {
  const banana = {
    fruit: 'banana',
  };
  return {...x, ...banana};
};


/**
 * @name base#destructArray
 * @type {function}
 * @description function which let to test if destruct Array has understood
 * @param {Array} x
 * @returns {Array} reverse x
 */
const destructArray = (x) => {
  let [a,b] = x;
  return [b,a];
};

/**
 * @name base#destructObject
 * @type {function}
 * @description function which let to test if destruct Object has understood
 * @param {Object} x
 * @returns {String}
 */
const destructObject = (x) => {
  const {fruit, country} = x;
  return fruit;
};

/**
 * @name base#destructArrayFunction
 * @type {function}
 * @description function which let to test if destruct array in fucntion has understood
 * @param {string} x
 * @param {string} y
 * @returns {String}
 */
const destructArrayFunction = ([x,y]) => {
  return x;
};

/**
 * @name base#destructObjectFunction
 * @type {function}
 * @description function which let to test if destruct object in function has understood
 * @param {string} name
 * @param {string} email
 * @returns {string}
 */
const destructObjectFunction= ({name, email}) => {
  return name;
};

export default {
  variableDeclaration,
  scopeUsed,
  templateString,
  enhancedObjectSimple,
  enhancedObjectParams,
  enhancedObjectFunction,
  defaultParams,
  restParams,
  spreedOperatorArray,
  spreedOperatorObject,
  destructArray,
  destructObject,
  destructArrayFunction,
  destructObjectFunction,
};