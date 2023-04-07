export default function toSkuString({ id, color, size }) {
  return `${id.toString().padStart(3, '0')}${color.toString().padStart(2, '0')}${size
    .toString()
    .padStart(2, '0')}`;
}
