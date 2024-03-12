export default function cleanSet(set, startString) {
  if (startString === '') {
    return startString;
  }
  const arraySet = [...set];
  const filtered = arraySet.filter((item) => {
    const slicedPart = item.slice(0, startString.length);
    return slicedPart === startString;
  });

  filtered.forEach((item, index) => {
    filtered[index] = item.slice(startString.length);
  });

  return filtered.join('-');
}
