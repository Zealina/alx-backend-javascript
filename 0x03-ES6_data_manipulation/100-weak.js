export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }
  const value = weakMap.get(endpoint) + 1;
  if (value >= 5) {
    throw new Error('Endpoint load is high');
  }
  weakMap.set(endpoint, value);
}
