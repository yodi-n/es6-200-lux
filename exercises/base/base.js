import 'babel-polyfill';

/**
 * @name base#variableDeclaration
 * @type {function}
 * @description function which let to create a variable with new syntax
 * @returns {string} fruit
 */
const variableDeclaration = () => {
  /**
   * Declare a variable fruit with new syntax variable declaration
   * this function must return fruit var
   */
};


/**
 * @name base#scopeUsed
 * @type {function}
 * @description function which let to test if variable scope has understood
 * @returns {string} banana
 */
const scopeUsed = () => {
  /**
   * Declare a variable fruit
   * if banana === banana set banana to apple
   * this function must be return fruit
   */
};

/**
 * @name base#templateString
 * @type {function};
 * @description function which let to test if template string has understood
 * @returns {string} templateString
 */
const templateString = () => {
  /**
   * Declare a constant student
   * Declare a constant hello
   * this function must return this string: 'Hello Student welcome to ES6 Sfeir School'
   */
};

/**
 * @name base#enhancedObjectSimple
 * @type {function}
 * @description function wich let to test if bascic enhancedObject has understood
 * @returns {Object}
 */
const enhancedObjectSimple = () => {
  /**
   * Declare a constant x = 45
   * Declare a constant y = 54
   * This function must be return an object like {x:45, y:54}
   */
};

/**
 * @name base#enhancedObjectParams
 * @description function which let to test if enhancedObject with params has understood
 * @param {string} name 
 * @returns {Object}
 */
const enhancedObjectParams = (name) => {
  /**
   * Declare an object which have for key hello and world_name
   * this function must return this object: {hello: 'hello' ,world_ES6: 'world ES6'}
   */
};

/**
 * @name base#enhanenhancedObjectFunction
 * @type {function}
 * @description function which let to test if enhancedObject with function has understood
 * @return {string}
 */
const enhancedObjectFunction = () => {
  /**
   * Declare an object which have for key hello => value of hello is a function
   * this function must be return the follow string: SFEIR
   */
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
const defaultParams = () => {
  /**
   * This function must return the sum of params => sum must be equal to 20
   */
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
const restParams = () => {
  /**
   * This function must return this follow string: '2Plop3'
   */
};

/**
 * @name base#sprredOperatorArray
 * @type {function}
 * @description function which let to test if spreedOperator on Array has understood
 * @param {Array} x
 * @returns {Array}
 */
const spreedOperatorArray = (x) => {
  /**
   * This function must be return the following array: [1,2,3,4]
   */
};

/**
 * @name base#spreedOperatorObject
 * @type {function}
 * @description function which let to test if spreedOperator on object has understood
 * @param {Object }x
 * @returns {Object}
 */
const spreedOperatorObject = (x) => {
  const banana = {
    fruit: 'banana',
  };

  /**
   * This function must be return the following object: {fruit: 'banana', country:'Guadeloupe'}
   */
};


/**
 * @name base#destructArray
 * @type {function}
 * @description function which let to test if destruct Array has understood
 * @param {Array} x
 * @returns {Array} reverse x
 */
const destructArray = (x) => {
  /**
   * This function must be return the inverse array of the params
   */
};

/**
 * @name base#destructObject
 * @type {function}
 * @description function which let to test if destruct Object has understood
 * @param {Object} x
 * @returns {String}
 */
const destructObject = (x) => {
  /**
   * This function must return value of key 'fruit': banana
   */
};

/**
 * @name base#destructArrayFunction
 * @type {function}
 * @description function which let to test if destruct array in function has understood
 * @param {Number} x
 * @param {Number} y
 * @returns {Number}
 */
const destructArrayFunction = () => {
  /**
   * This function must return the first value of the array pass in params without syntax array[0]
   */
};

/**
 * @name base#destructObjectFunction
 * @type {function}
 * @description function which let to test if destruct object in function has understood
 * @param {string} name
 * @param {string} email
 * @returns {string}
 */
const destructObjectFunction= () => {
  /**
   * This function must return the value of the first key of the object pass in params without dot notation
   */
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