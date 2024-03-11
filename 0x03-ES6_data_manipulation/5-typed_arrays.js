export default function createInt8TypedArray(length, position, value) {
  const ArrayBuffer = new Int8Array(length);
  if (position >= 0 && position < length) {
    ArrayBuffer[position] = value;
    return new DataView(ArrayBuffer.buffer);
  }
  throw new Error('Position outside range');
}
