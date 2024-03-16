class DynamicArray {

  constructor(defaultSize = 4) {

    // Your code here
    this.data = new Array(defaultSize);
    this.length = 0;
    this.capacity = defaultSize;
  }

  read(index) {

    // Your code here
    if (index >= 0 && index < this.length) {
      return this.data[index];
    } else {
      return undefined;
    }
  }

  push(val) {
    // Your code here
    if (this.length === this.capacity) {
      this.resize();
    }
    this.data[this.length] = val;
    this.length;
  }

  pop() {
    // Your code here
    if (this.length === 0) return undefined;
    this.length--;
    const removedElement = this.data[this.length];
    delete this.data[this.length];
    return removedElement;
  }

  shift() {

    // Your code here
    if (this.length === 0) return undefined;
    const removedElement = this.data[0];
    for (let i = 1; i < this.length; i++) {
      this.data[i - 1] = this.data[i];
    }
    delete this.data[this.length - 1];
    this.length--;
    return removedElement;

  }

  unshift(val) {

    // Your code here
    if (this.length === this.capacity) {
      this.resize();
    }
    for (let i = this.length - 1; i >= 0; i--) {
      this.data[i + 1] = this.data[i];
    }
    this.data[0] = val;
    this.length++;
  }

  indexOf(val) {

    // Your code here
    for (let i = 0; i < this.length; i++) {
      if (this.data[i] === val) return i;
    }
    return -1;
  }

  resize() {

    // Your code here
    const newCapacity = this.capacity * 2;
    const newData = new Array(newCapacity);
    for (let i = 0; i < this.length; i++) {
      newData[i] = this.data[i];
    }
    this.data = newData;
    this.capacity = newCapacity;
  }

}


module.exports = DynamicArray;
