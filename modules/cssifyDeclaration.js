/* @flow  */
import hyphenateProperty from './hyphenateProperty'

export default function cssifyDeclaration(property: string, value: any): string {
  const hyphenatedProperty = hyphenateProperty(property)

  if (Array.isArray(value)) {
    return value.reduce((css, val) => {
      // prevents the semicolon after
      // the last rule declaration
      if (css) {
        css += ';'
      }

      return `${css}${hyphenatedProperty}:${val}`
    }, '')
  }

  return `${hyphenatedProperty}:${value}`
}
