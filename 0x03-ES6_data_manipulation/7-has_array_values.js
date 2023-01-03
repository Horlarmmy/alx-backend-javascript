export default function hasValuesFromArray(set, array1) {
  for (const item of array1) {
    if (!set.has(item)) {
      return false;
    }
  }
  return true;
}
