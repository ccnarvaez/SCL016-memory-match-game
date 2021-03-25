import resetScore from './App.js';
import randomArray from './App.js';
import cardComponents from './App.js';


describe('randomArray', () => {
  it('should render without crashing', () => {
    //const sortedArray= randomArray();
    expect(randomArray).not.toThrow('error');
  });
});

describe('resetScore', () => {
  it('should render without crashing', () => {
    //const sortedArray= randomArray();
    expect(resetScore).not.toThrow('error');
  });
});

describe('pruebas para fihserRestart', () => {
  it('deberia ser una función', () => {
    expect(typeof randomArray).toBe('function');
  });
});

describe('cardComponents', () => {
  it('should render without crashing', () => {
    const idName = cardComponents();
    expect(idName instanceof HTMLElement).toBe(false);
  });
});

describe('randomArray', () => {
  it('debería ser un array', () => {
    expect(typeof sortedArray).toBe('array');
  });
});

describe('win is 0', () => {
  it('should render without crashing', () => {
    const win = resetScore();
    expect(win) .toBe(undefined);
  });
});
