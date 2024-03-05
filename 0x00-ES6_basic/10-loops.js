export default function appendToEachArrayValue(array, appendString) {
  let counter = 0;
  /* eslint-disable no-param-reassign */
  for (const value of array) {
    array[counter] = appendString + value;
    counter += 1;
  }

  return array;
}
