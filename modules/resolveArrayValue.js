/* @flow  */
import hyphenateProperty from './hyphenateProperty'

export default function resolveArrayValue(property: string, value: any): string {
  const hyphenatedProperty = hyphenateProperty(property)

  return value.join(`;${hyphenatedProperty}:`)
}
