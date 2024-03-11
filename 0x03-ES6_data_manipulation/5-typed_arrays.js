export default function createInt8TypedArray(length, position, value) {
  const ArrayBuffer = new Uint8Array(length);
  try {
    ArrayBuffer[position] = value;
  } catch (_) {
    throw new Error('Position outside range');
  }
  return new DataView(ArrayBuffer.buffer);
}
