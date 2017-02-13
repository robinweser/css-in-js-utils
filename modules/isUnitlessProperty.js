/* @flow */
import isUnitlessCSSProperty from 'unitless-css-property'

export default function isUnitlessProperty(property: string): boolean {
  return isUnitlessCSSProperty(property)
}
