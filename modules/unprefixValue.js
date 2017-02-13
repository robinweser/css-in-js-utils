/* @flow */
export default function unprefixValue(value: any): any {
  if (typeof value === 'string') {
    return value.replace(/(-ms-|-webkit-|-moz-|-o-)/g, '')
  }

  return value
}
