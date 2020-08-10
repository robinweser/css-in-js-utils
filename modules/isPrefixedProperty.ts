const RE = /^(Webkit|Moz|O|ms)/

export default function isPrefixedProperty(property: string) {
  return RE.test(property)
}
