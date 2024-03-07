const cloneSymbol = Symbol('clone');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  [cloneSymbol]() {
    return new this.constructor();
  }

  cloneCar() {
    const clone = this[cloneSymbol]();
    Object.getOwnPropertyNames(this).forEach((prop) => {
      clone[prop] = this[prop];
    });
    return clone;
  }
}
