/* @flow */
import cssifyDeclaration from './cssifyDeclaration'

export default function cssifyObject(style: Object): string {
  let css: string = ''

  for (const property in style) {
    const value = style[property]
    const valueType = typeof value
    if (valueType !== 'string' && valueType !== 'number' && !Array.isArray(value)) {
      continue
    }

    // prevents the semicolon after
    // the last rule declaration
    if (css) {
      css += ';'
    }

    css += cssifyDeclaration(property, value)
  }

  return css
}
