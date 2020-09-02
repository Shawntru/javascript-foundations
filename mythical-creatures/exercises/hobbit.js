class Hobbit {
  constructor(name) {
    this.name = name;
    this.age = 0;
    this.adult = false;
    this.old = false;
    this.hasRing = (name === 'Frodo') ? true : false;
  }
  celebrateBirthday() {
    this.age += 1;
    if (this.age >= 33) {
      this.adult = true;
    }
    if (this.age >= 101) {
      this.old = true;
    }
  }
}

module.exports = Hobbit;
