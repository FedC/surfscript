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

## 🌊🏄‍♂️🌊 Catch Some Waves! 🌊🏄‍♀️🌊

That's it! You're now ready to catch waves in any board type you choose with SurfScript.js. If you have any questions or issues, please feel free to open an issue on our [GitHub repository](https://github.com/FedC/surfscript.git). Happy surfing! 🤙🏄‍♂️🌊