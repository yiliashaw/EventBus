module.exports = (array, fn) => {
  if (Array.prototype.findIndex === 'function') {
    return array.findIndex(fn);
  }

  const len = array.length;

  for (let i = 0; i < len; i++) {
    const item = array[i];
    if (fn(item, i)) {
      return i;
    }
  }

  return -1;
};