/* @flow */
const dashRegex = /-([a-z])/g
const msRegex = /^Ms/g

export default function camelCaseProperty(property: string): string {
  return property.replace(dashRegex, match => match[1].toUpperCase()).replace(msRegex, 'ms')
}
