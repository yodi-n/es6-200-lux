export class Animal {

  constructor(name) {
    this.name = name;
  }

  /**
   * @name Animal#scream
   * @type {function}
   * @description function which return a scream
   * @param {string} scream
   * @returns {*}
   */
   scream (scream) {
    return scream
  }

  /**
   * @name Animal#animalName
   * @type {getter}
   * @description getter of name of animal
   * @returns {String}
   */
  get animalName () {
    return this.name;
  }
}
