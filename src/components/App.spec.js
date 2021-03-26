
import resetScore from './App.js';
import randomArray from './App.js';
import cardComponents from './App.js';
import staticCards from './App.js';



describe('cardComponents', () => {
  it('should render without crashing', () => {
    expect(cardComponents).not.toThrow('error');
  });
});

describe('staticCards', () => {
  it('should render without crashing', () => {
    expect(staticCards).not.toThrow('error');
  });
});

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

describe('randomArray typeof testing', () => {
  it('should be function', () => {
    expect(typeof randomArray).toBe('function');
  });
});

describe('staticCards typeof testing', () => {
  it('should render without crashing', () => {
    expect(typeof staticCards).toBe('function');
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

describe('cardComponents', () => {
  it('should render without crashing', () => {
    const flipIt = cardComponents()  ;
    expect(flipIt instanceof HTMLElement).toBe(true);
  });
});

