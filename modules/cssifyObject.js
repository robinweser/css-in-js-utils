/* @flow */
import cssifyDeclaration from './cssifyDeclaration'

export default function cssifyObject(style: Object): string {
  let css: string = ''

  for (const property in style) {
    if (typeof style[property] !== 'string' && typeof style[property] !== 'number') {
      continue
    }

    // prevents the semicolon after
    // the last rule declaration
    if (css) {
      css += ';'
    }

    css += cssifyDeclaration(property, style[property])
  }

  return css
}
