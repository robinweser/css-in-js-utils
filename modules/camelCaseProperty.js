const DASH = /-([a-z])/g
const MS = /^Ms/g

function toUpper(match) {
  return match[1].toUpperCase()
}

export default function camelCaseProperty(property) {
  return property.replace(DASH, toUpper).replace(MS, 'ms')
}
