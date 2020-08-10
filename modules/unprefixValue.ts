const RE = /(-ms-|-webkit-|-moz-|-o-)/g

export default function unprefixValue(value: string | string[]) {
  if (typeof value === 'string') {
    return value.replace(RE, '')
  }

  return value
}
