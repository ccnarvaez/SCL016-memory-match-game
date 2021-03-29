import resetScore from './App.js';
import randomArray from './App.js';
import cardComponents from './App.js';
import infoArray from './App.js';
import webdev_Definition from './App.js';

describe('randomArray', () => {
  it('should render without crashing', () => {
    expect(randomArray).not.toThrow('error');
  });
});

describe('resetScore', () => {
  it('should render without crashing', () => {
    expect(resetScore).not.toThrow('error');
  });
});

describe('pruebas para randomArray', () => {
  it('deberia ser una función', () => {
    expect(typeof randomArray).toBe('function');
  });
});

describe('pruebas para randomArray', () => {
  it('deberia ser una función', () => {
    expect(typeof resetScore).toBe('function');
  });
});

describe('cardComponents', () => {
  it('should render without crashing', () => {
    const idName = cardComponents();
    expect(idName instanceof HTMLElement).toBe(false);
  });
});

describe('win is 0', () => {
  it('should render without crashing', () => {
    const win = resetScore();
    expect(win) .toBe(undefined);
  });
});

describe('cardComponents typeof testing', () => {
  it('should be function', () => {
    expect(typeof cardComponents).toBe('function');
  });
});

describe('win is undefined', () => {
  it('should render without crashing', () => {
    const win = resetScore();
    expect(win) .toBe(undefined);
  });
});

describe('webdevDefinition', () => {
  it('debería ser un objeto', () => {
    expect(typeof webdev_Definition).toBe('function');
  });
});

describe('Matchers Arrays', () => { 
  test('Angular existe en el array', () => {
      expect(infoArray()).toContain('Angular');
  });
});

describe('randomArray', () => {
  it('debería ser un array', () => {
    expect(typeof sortedArray).toBe('array');
  });
});