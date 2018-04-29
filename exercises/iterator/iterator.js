/**
 * @name iterator#iteratorArray
 * @type {function}
 * @description Test if iteration on array has understood
 * @param {number}iteration
 * @returns {Set<any>}
 */
export function iteratorArray(iteration) {
  const arrayIterator = new Set();
  for (let i = 0; i < iteration; i++) {
    arrayIterator.add(i+1);
  }
  return arrayIterator;
}

/**
 * @name iterator#iteratorObject
 * @type {function}
 * @description Test if iteration on object has understood
 * @param {string} name
 * @param {string} lastName
 * @returns {Map<any, any>}
 */
export function iteratorObject(name, lastName) {
  const objectIterator = new Map();
  return objectIterator.set(name, lastName);
}

/**
 * @name iterator#generatorFunction
 * @type {function}
 * @description Test if generator function has understood
 * @param {number} x
 * @returns {number} final result = 13
 */
export function generatorFunction(x) {
  let finalResult;
  let fib = [];
  fib[0] = 0;
  fib[1] = 1;

  function* fibonacci(i) {
    yield fib[i] = fib[i-2] + fib[i-1];
  }

  for(let j = x; j<=7; j++) {
    finalResult = fibonacci(j).next().value;
  }
  return finalResult;
}