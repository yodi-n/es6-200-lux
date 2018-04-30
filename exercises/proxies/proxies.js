/**
 * @type {Object}
 * @description Test if Proxies has understood
 * @returns {*}
 */

export const trap = {
  set (target, prop, value) {
    if ( !isNaN(prop) && !target.includes(value.toLowerCase())) {
      target.push(value.toLowerCase());
      return true;
    }
    return true;
  },

  get (target, prop) {
    if (isNaN(prop)) {
      return target[prop];
    }
    return target[prop].replace(/\W/g, '');
  },
};

