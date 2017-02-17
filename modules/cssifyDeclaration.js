/* @flow  */
import hyphenateProperty from './hyphenateProperty'

export default function cssifyDeclaration(property: string, value: any): string {
  return `${hyphenateProperty(property)}:${value}`
}
