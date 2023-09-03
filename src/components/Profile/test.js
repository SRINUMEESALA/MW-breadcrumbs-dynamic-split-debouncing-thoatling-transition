const findFibnocciSeries = (n, PrevStoredValues = []) => {
  if (PrevStoredValues[n] !== undefined) {
    return PrevStoredValues[n];
  }
  let result;
  if (n <= 1) {
    result = n;
  } else {
    result = findFibnocciSeries(n - 1) + findFibnocciSeries(n - 2);
  }
  PrevStoredValues[n] = result;
  return result;
};
console.log(findFibnocciSeries(30));
console.log(findFibnocciSeries(30));
console.log(findFibnocciSeries(30));
