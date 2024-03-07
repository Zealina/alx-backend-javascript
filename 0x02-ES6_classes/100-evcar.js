/* eslint-disable class-methods-use-this */

import Car from './10-car';

const evCloneSymbol = Symbol('evClone');

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  [evCloneSymbol]() {
    return new Car();
  }

  cloneCar() {
    const clone = this[evCloneSymbol]();
    return clone;
  }
}
