import { Animal } from "./animal";

export class Cat extends Animal {

  constructor(name, shout) {
    super(name);
    this.shout = shout;
    this.name = name;
  }

  /**
   * @name cat#catScream
   * @type {function}
   * @description function which extend scream of animal
   * @returns {string}
   */
  catScream () {
    return super.scream(this.shout)
  }

  /**
   * @name cat#catName
   * @type {getter}
   * @description getter of name of cat
   * @returns {string}
   */
  get catName () {
    return this.name;
  }
}