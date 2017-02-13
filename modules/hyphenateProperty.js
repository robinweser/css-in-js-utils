/* @flow */
import hyphenateStyleName from 'hyphenate-style-name'

export default function hyphenateProperty(property: string): string {
  return hyphenateStyleName(property)
}
