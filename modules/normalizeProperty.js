/* @flow */
import camelCaseProperty from './camelCaseProperty'
import unprefixProperty from './unprefixProperty'

export default function normalizeProperty(property: string): string {
  return unprefixProperty(camelCaseProperty(property))
}
