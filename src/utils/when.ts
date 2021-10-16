export default function when<T, P extends keyof T>(
  prop: P,
  template: (value: Ensure<T[P]>, props: T) => string
) {
  return (props: T) =>
    props[prop] != undefined ? template(props[prop] as Ensure<T[P]>, props) : ''
}
