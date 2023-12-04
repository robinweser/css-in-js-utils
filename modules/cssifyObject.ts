import cssifyDeclaration from './cssifyDeclaration'

export type StyleObject = {
  [key: string]:
    | string
    | number
    | StyleObject
    | (string | number | StyleObject)[]
}

export default function cssifyObject(style: StyleObject) {
  let css = ''

  const keys = Object.keys(style)
  for (let i = 0, len = keys.length; i < len; i++) {
    const property = keys[i]
    const value = style[property]
    if (typeof value !== 'string' && typeof value !== 'number') {
      // do nothing
    } else {
      // prevents the semicolon after
      // the last rule declaration
      if (css) {
        css += ';'
      }

      css += cssifyDeclaration(property, value)
    }
  }

  return css
}
