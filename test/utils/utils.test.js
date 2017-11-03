import { limitWordCount } from '../../src/utils';

describe('limitWordCount', () => {
  it('Reduces the word count to n', () => {
    const string = 'A john made pancakes in the bed';
    expect(limitWordCount(1, string)).toEqual('A');
    expect(limitWordCount(2, string)).toEqual('A john');
  });
});
