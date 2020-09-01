class Unicorn {
  constructor(name, color = 'white') {
    this.name = name;
    this.color = color;
  }
  isWhite() {
    return (this.color === 'white');
  }
  says(phrase) {
    return `**;* ${phrase} *;**`;
  }
}

module.exports = Unicorn;
