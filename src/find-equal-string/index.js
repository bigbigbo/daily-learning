/* eslint-disable no-plusplus */
export default function findEqualString(stringA, stringB) {
  if (typeof stringA !== 'string' || typeof stringB !== 'string') {
    return '';
  }

  let result = '';
  const [shortString, longString] = [stringA, stringB].sort((a, b) => a.length - b.length);

  for (let i = 0; i < shortString.length; i++) {
    for (let j = i + 1; j <= shortString.length; j++) {
      const unit = shortString.slice(i, j);
      if (longString.indexOf(unit) !== -1) {
        if (unit.length > result.length) {
          result = unit;
        }
      }
    }
  }
  return result;
}
