class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }
  stare(victim) {
    victim.stoned = true;
    this.statues.push(victim)
    if (this.statues.length > 3) {
      var vicFree = this.statues.shift();
      vicFree.stoned = false;
    }
  }
}

module.exports = Medusa;
