export default function appendToEachArrayValue(array, appendString) {
  const array2 = [];
  for (let idx of array) {
    const value = idx;

    idx = appendString + value;
    array2.push(idx);
  }

  return array2;
}
