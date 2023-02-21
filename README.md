# 🌊🏄‍♂️ SurfScript.js 🏄‍♀️🌊

SurfScript.js is a browser library that allows you to catch waves in different board types. With SurferScript.js, you can easily switch between board types to find the perfect fit for the current wave conditions.

## 🚀 Installation

To install SurfScript.js as a browser library, simply include the following script tag in your HTML file:

```html
<script src="SurfScript.js"></script>
```

🌊 Usage

Using SurfScript.js is easy. First, create a new Surfer object by calling the Surfer() constructor function:

```javascript
const mySurfer = new Surfer('Kelly Slater', 'The Swell Slayer', 100);
```
Then, you can use the catchWave() method to catch a wave in a specific board type:

```javascript
mySurfer.catchWave('shortboard');
```

The `catchWave()` method takes a single argument, which is the type of board you want to use. SurfScript.js currently supports the following board types:

- shortboard
- longboard
- fish
- funboard

If you don't specify a board type, SurfScript.js will default to using a random board.

## Increasing and Decreasing Skill Level
To increase or decrease a surfer's skill level, use the `increaseSkillLevel()` or `decreaseSkillLevel()`

```javascript
surfer.increaseSkillLevel(); // increases surfer's skill level by 1
surfer.decreaseSkillLevel(); // decreases surfer's skill level by 1
```

## Getting Skill Level
To get a surfer's skill level, use the `getSkillLevel()` method:

```javascript
const skillLevel = surfer.getSkillLevel(); // "Chad is a ripper with a skill level of 70."
```

## Getting the Surfer's Quiver
To get a surfer's quiver, use the `getQuiver()` method:

```javascript
const quiver = surfer.getQuiver(); // ["shortboard"]
```

## Adding and Removing Board Types
To add or remove a board type to a surfer's quiver, use the `addBoardType()` or `removeBoardType()` methods:

```javascript
surfer.addBoardType("longboard"); // adds "longboard" to surfer's quiver
surfer.removeBoardType("shortboard"); // removes "shortboard" from surfer's quiver
```

## Introducing the Surfer
To introduce a surfer, use the introduce() method:

```javascript
surfer.introduce(); // "Hi, I'm Chad, a surfer riding a shortboard!"
```

## Catching a Wave

To catch a wave, use the catchWave() method. If no board type is specified, a random board type from the surfer's quiver will be used:

```javascript
surfer.catchWave(); // "Right on! Chad caught a sick wave on their shortboard and shredded it!"
surfer.catchWave("longboard"); // "Right on! Chad caught a sick wave on their longboard and shredded it!"
```

## Wiping Out
To wipe out, use the wipeOut() method:

```javascript
surfer.wipeOut(); // "Chad wiped out and got caught in the spin cycle! He needs to work on his moves or he'll be shark bait!"
Board Types
```

## The following board types are currently available:

The Hot Mess
The Wipeout
The Hangover
The Kookmobile
The Boardom Buster
The Wave Wrangler
The Dino-Mite
The Surf-n-Turf
The Beach Bum
The Barrel Dodger
The Sea Cow
The Swell Slayer
The Shark Bait
The Tide Tamer
The Foamie Folly
shortboard
longboard
fish
funboard



## 🌊🏄‍♂️🌊 Catch Some Waves! 🌊🏄‍♀️🌊

That's it! You're now ready to catch waves in any board type you choose with SurfScript.js. If you have any questions or issues, please feel free to open an issue on our [GitHub repository](https://github.com/FedC/surfscript.git). Happy surfing! 🤙🏄‍♂️🌊

## License

Surfer is MIT licensed.