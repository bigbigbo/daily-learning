function insertValue(input) {
  return ["A", "B", "C", "D"].reduce((memo, item) => {
    const tmp = [...memo].reverse();
    const idx = memo.length - tmp.findIndex(i => i.startsWith(item)) - 1;

    return [...memo.slice(0, idx + 1), item, ...memo.slice(idx + 1)];
  }, input);
}

export default insertValue;
