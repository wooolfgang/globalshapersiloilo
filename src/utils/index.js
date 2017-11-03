export const limitWordCount = (nWords, string) => {
  const split = string.split(' ');
  const filtered = split.filter((x, index) => index < nWords);
  return filtered.join(' ');
};
