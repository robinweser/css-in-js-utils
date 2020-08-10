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

  for (const property in style) {
    const value = style[property]
    if (typeof value !== 'string' && typeof value !== 'number') {
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
