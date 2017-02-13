/* @flow */
export default function camelCaseProperty(property: string): string {
  return property.replace(/-([a-z])/g, match => match[1].toUpperCase()).replace(/^Ms/g, 'ms')
}
