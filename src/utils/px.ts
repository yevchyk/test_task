export default function px(value: number | string) {
  return typeof value === 'number' ? value + 'px' : value
}
