// implementing array data structure.

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  getItem(index) {
    return this.data[index];
  }

  firstInsert(item) {
    if (this.length > 0) {
      this.#shiftItemsToRight(0);
    } else {
      this.length++;
    }
    this.data[0] = item;
    return this.length;
  }

  firstDelete() {
    const item = this.data[0];
    if (this.length > 0) {
      this.#shiftItemsToLeft(0);
    }
    return item;
  }

  lastInsert(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  lastDelete() {
    const lastItem = this.data[this.length - 1];
    if (this.length > 0) {
      delete this.data[this.length - 1];
      this.length--;
    }
    return lastItem;
  }

  deleteItem(index) {
    const item = this.data[index];
    if (index >= 0) {
      this.#shiftItemsToLeft(index);
    }
    return item;
  }

  insertItem(index, item) {
    if (index >= 0) {
      this.#shiftItemsToRight(index);
      this.data[index] = item;
    }
    return this.length;
  }

  updateItem(index, item) {
    if (index >= 0) {
      this.data[index] = item;
    }
    return this.data[index];
  }

  // private methods
  #shiftItemsToLeft(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }

  #shiftItemsToRight(index) {
    for (let i = this.length - 1; i >= index; i--) {
      this.data[i + 1] = this.data[i];
    }
    this.length++;
  }
}
