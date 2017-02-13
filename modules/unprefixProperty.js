/* @flow */
export default function unprefixProperty(property: string): string {
  const propertyWithoutPrefix = property.replace(/^(ms|Webkit|Moz|O)/, '')
  return propertyWithoutPrefix.charAt(0).toLowerCase() + propertyWithoutPrefix.slice(1)
}
