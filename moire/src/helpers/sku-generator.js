export default class SKU {
  _id;

  _color;

  _size;

  constructor({ id, color, size }) {
    this._id = id;
    this._color = color;
    this._size = size;
  }

  toString() {
    return `${this._id.toString().padStart(3, '0')}${this._color
      .toString()
      .padStart(2, '0')}${this._size.toString().padStart(2, '0')}`;
  }
}
