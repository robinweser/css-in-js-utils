import camelCaseProperty from './camelCaseProperty'
import unprefixProperty from './unprefixProperty'

export default function normalizeProperty(property: string) {
  return unprefixProperty(camelCaseProperty(property))
}
