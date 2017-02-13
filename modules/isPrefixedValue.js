/* @flow */
const regex = /-webkit-|-moz-|-ms-/

export default function isPrefixedValue(value: any): boolean {
  return typeof value === 'string' && value.match(regex) !== null
}
