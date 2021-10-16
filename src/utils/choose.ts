type Case = string | number
type ConditionObject<T extends Case, V> = { [k in T]: V }
type Conditions<T extends Case, V> = ConditionObject<T, V>

function choose<T extends Case, V>(
  predicate: T,
  defaultValue: V | Conditions<T, V>,
  conditions?: V | Conditions<T, V>
) {
  if (arguments.length === 2) {
    conditions = defaultValue
    defaultValue = undefined as any
  }
  if (!Array.isArray(conditions)) {
    return predicate in conditions!
      ? (conditions as ConditionObject<T, V>)[predicate]
      : defaultValue
  }
  return defaultValue
}

export default choose
