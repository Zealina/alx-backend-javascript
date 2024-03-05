export default function iterateThroughObject(reportWithIterator) {
  let result = "";
  for(let name of reportWithIterator) {
    if (!result) {
      result = name;
    } else {
      result = `${result} | ${name}`;
    }
  }
  return result;
 }
