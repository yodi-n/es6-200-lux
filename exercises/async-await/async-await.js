import 'isomorphic-fetch';

/**
 * @type {function}
 * @description Test if async function has understood
 * @returns {Promise<Response>}
 */
export default async () => {
  return await fetch('https://jsonplaceholder.typicode.com/posts');
}