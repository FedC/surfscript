const boardTypes = [
  "The Hot Mess",
  "The Wipeout",
  "The Hangover",
  "The Kookmobile",
  "The Boardom Buster",
  "The Wave Wrangler",
  "The Dino-Mite",
  "The Surf-n-Turf",
  "The Beach Bum",
  "The Barrel Dodger",
  "The Sea Cow",
  "The Swell Slayer",
  "The Shark Bait",
  "The Tide Tamer",
  "The Foamie Folly",
  "shortboard",
  "longboard",
  "fish",
  "funboard"
];

class Surfer {
  boardTypes = [];
  boardType;

  constructor(name, boardType, skillLevel) {
    this.name = name;
    if (typeof skillLevel !== 'number') {
      throw new Error('Sorry bro, skill levels are like.. numbers.');
    }
    this.skillLevel = skillLevel;
    if (boardTypes.includes(boardType)) {
      this.boardTypes.push(boardType);
      this.boardType = boardType;
    } else {
      throw new Error(`Sorry dude, that's an invalid board type. What the heck is a ${boardType}!?`);
    }
  }

  increaseSkillLevel() {
    this.skillLevel++;
  }

  decreaseSkillLevel() {
    this.skillLevel--;
  }

  getSkillLevel() {
    let skillLevelNames = ["kook", "grom", "shredder", "ripper", "legend"];
    let index = Math.floor(this.skillLevel / 10);
    let name = skillLevelNames[index] || "pro";
    return `${this.name} is a ${name} with a skill level of ${this.skillLevel}.`;
  }

  getQuiver() {
    return this.boardTypes;
  }

  grabBoard() {
    return this.boardTypes[Math.floor(Math.random() * this.boardTypes.length)];
  }

  addBoardType(boardType) {
    if (this.boardTypes.includes(boardType)) {
      console.log(`Dude, ${boardType} is already in the board types list!`);
    } else {
      this.boardTypes.push(boardType);
      console.log(`Radical, ${boardType} has been added to the board types list!`);
    }
  }

  removeBoardType(boardType) {
    if (this.boardTypes.includes(boardType)) {
      const index = this.boardTypes.indexOf(boardType);
      this.boardTypes.splice(index, 1);
      console.log(`Bummer, ${boardType} has been removed from the board types list!`);
    } else {
      console.log(`Dude, ${boardType} is not in the board types list!`);
    }
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}, a surfer riding a ${this.boardType}!`);
  }

  catchWave(boardType) {
    if (!boardType) {
      if (!this.boardTypes || this.boardTypes.length === 0) {
        throw new Error(`Sorry, ${this.name} needs to have at least one board type to catch a wave, bro!`);
      }
      boardType = this.grabBoard();
    }
    console.log(`Right on! ${this.name} caught a sick wave on their ${boardType} and shredded it!`);
  }

  wipeOut() {
    console.log(`${this.name} wiped out and got caught in the spin cycle!`);
    console.log("He needs to work on his moves or he'll be shark bait!");
  }
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = Surfer;
} else {
  window.Surfer = Surfer;
}
