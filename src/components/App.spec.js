import resetScore from './App.js';
import randomArray from './App.js';
import cardComponents from './App.js';
import arrayInformation from './App.js';


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

describe('Matchers Arrays', () => { 
  test('Angular existe en el array', () => {
      expect(arrayInformation).toContain('Angular');
  });
  /*test('Guadalajara no existe en el array', () => {
      expect(arrProvincias()).not.toContain('Guadalajara');
  });
  test('El array semana tiene 9 elementos', () => {
      expect(arrProvincias()).toHaveLength(9);
  });
  test('Existe Lunes en el array semana', () => {
      expect(arrDias()).toContain('Lunes');
  });*/
});
