const toCurrency = function (value, unit = 'USD', dir = 'right') {
  if (dir === 'right') {
    return value + ' ' + unit;
  } else {
    return unit + ' ' + value;
  }
};

const validateQuantity = function (quality) {
  let num = parseInt(quality);
  if (num == quality && !isNaN(num)) {
    return num >= 1;
  }
  return false;
};
export { toCurrency, validateQuantity };
