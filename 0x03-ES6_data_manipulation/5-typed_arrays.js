export default function createInt8TypedArray(length, position, value) {
  const ArrayBuffer = new Uint8Array(length);
  try {
    ArrayBuffer[position] = value;
    return new DataView(ArrayBuffer.buffer);
  } catch (_) {
    throw new Error('Position outside range');
  }
}
