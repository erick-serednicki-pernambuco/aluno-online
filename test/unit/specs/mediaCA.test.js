const mediaCA = require('../../../src/models/nota.js');

describe('mediaCA', () => {
  it('retorna "SS" para média entre 9,0 e 10', () => {
    expect(mediaCA(9.5)).toBe('SS');
    expect(mediaCA(10)).toBe('SS');
  });

  it('retorna "MS" para média entre 7,0 e 8,9', () => {
    expect(mediaCA(7)).toBe('MS');
    expect(mediaCA(8.5)).toBe('MS');
    expect(mediaCA(8.9)).toBe('MS');
  });

  it('retorna "MM" para média entre 5,0 e 6,9', () => {
    expect(mediaCA(5)).toBe('MM');
    expect(mediaCA(6.5)).toBe('MM');
    expect(mediaCA(6.9)).toBe('MM');
  });

  it('retorna "MI" para média entre 3,0 e 4,9', () => {
    expect(mediaCA(3)).toBe('MI');
    expect(mediaCA(4.5)).toBe('MI');
    expect(mediaCA(4.9)).toBe('MI');
  });

  it('retorna "II" para média entre 0,1 e 2,9', () => {
    expect(mediaCA(0.1)).toBe('II');
    expect(mediaCA(2)).toBe('II');
    expect(mediaCA(2.9)).toBe('II');
  });

  it('retorna "SR" para média 0', () => {
    expect(mediaCA(0)).toBe('SR');
  });
});
