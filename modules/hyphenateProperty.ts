import hyphenateStyleName from 'hyphenate-style-name'

export default function hyphenateProperty(property: string | number) {
  return hyphenateStyleName(property)
}
