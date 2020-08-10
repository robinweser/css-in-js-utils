import hyphenateProperty from './hyphenateProperty'

export default function cssifyDeclaration(
  property: string,
  value: string | number
) {
  return hyphenateProperty(property) + ':' + value
}
