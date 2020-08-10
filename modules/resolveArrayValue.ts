import hyphenateProperty from './hyphenateProperty'

export default function resolveArrayValue(property: string, value: string[]) {
  return value.join(';' + hyphenateProperty(property) + ':')
}
