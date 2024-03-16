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

  }

  unshift(val) {

    // Your code here
  }

  indexOf(val) {

    // Your code here
  }

  resize() {

    // Your code here
  }

}


module.exports = DynamicArray;
