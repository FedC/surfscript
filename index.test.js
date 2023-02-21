const Surfer = require('./surfscript');

const warn = jest.spyOn(console, "warn").mockImplementation(() => {});
const log = jest.spyOn(console, "log").mockImplementation(() => {});

test('Surfer catchWave()', () => {
  const name = 'Federico';
  const boardType = 'The Hangover';
  let federico = new Surfer(name, boardType, 1);
  expect(federico.name).toBe(name);
  expect(federico.boardType).toBe(boardType);
  federico.catchWave(boardType);
  expect(log).toBeCalledWith(`Right on! ${name} caught a sick wave on their ${boardType} and shredded it!`);
});

test('Surfer boardType check', () => {
  const name = 'Kelly';
  const boardType = 'shawshankwank';
  expect(() => new Surfer(name, boardType, 105)).toThrowError(`Sorry dude, that's an invalid board type. What the heck is a ${boardType}!?`);
});
