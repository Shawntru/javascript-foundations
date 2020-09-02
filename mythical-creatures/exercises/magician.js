class Magician {
  constructor(magicObj = {}) {
    this.name = magicObj.name;
    this.topHat = (magicObj.topHat === false) ? (magicObj.topHat = false) : (magicObj.topHat = true);
    this.confident = false;
    this.castCount = 0
  }
  incantation(spell) {
    return spell.toUpperCase() + '!';
  }
  cast(){
    this.castCount += 1;
    if (this.castCount >= 3) this.confident = true;
    if (this.topHat === true) return 'PULL RABBIT FROM TOP HAT';
    else return 'PULL DOVE FROM SLEEVE';
  }
  performShowStopper() {
    if (this.confident === true) return 'WOW! The magician totally just sawed that person in half!';
    else return 'Oh no! Practice more before attempting this trick!';
  }
}

module.exports = Magician;
