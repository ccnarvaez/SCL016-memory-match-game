
import fisherRestart from './App.js';

import resetScore from './App.js';

describe('sortedArray', () => {
  it('typeof array', () => {
    const sortedArray= fisherRestart();
    expect(sortedArray instanceof Object).toBe(true);
  });
});

describe('fisherRestart', () => {
  it('should render without crashing', () => {
    //const sortedArray= fisherRestart();
    expect(fisherRestart).not.toThrow('error');
  });
});

describe('resetScore', () => {
  it('should render without crashing', () => {
    //const sortedArray= fisherRestart();
    expect(resetScore).not.toThrow('error');
  });
});


/*
describe('App', () => {
  it('should render without crashing', () => {
    const el = App();
    expect(el instanceof HTMLElement).toBe(true);
  });
});
*/
