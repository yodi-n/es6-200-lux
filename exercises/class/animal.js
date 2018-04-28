export class Animal {

  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  /**
   * @name Animal#scream
   * @type {function}
   * @description function to return the scream of an animal
   * @param {string} scream
   * @returns {string}
   */
  scream (scream) {
    return scream;
  }
}
