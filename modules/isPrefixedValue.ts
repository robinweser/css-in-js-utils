const RE = /-webkit-|-moz-|-ms-/

export default function isPrefixedValue(value: string) {
  return typeof value === 'string' && RE.test(value)
}
