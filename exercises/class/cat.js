import {Animal} from "./animal";

export class Cat extends Animal {

  constructor(name, scream) {
    const type = "cat";
    super(name, type);
    this.scream = scream;
  }

  /**
   * @name Cat#catScream
   * @type {function};
   * @description return the scram of a cat
   * @returns {string}
   */
  catScream () {
    return super.scream(this.scream);
  }

}