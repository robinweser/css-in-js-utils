/* @flow */
const regex = /^(Webkit|Moz|O|ms)/

export default function isPrefixedProperty(property: string): boolean {
  return regex.test(property)
}
