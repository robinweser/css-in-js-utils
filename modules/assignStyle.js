/* @flow */
export default function assignStyle(base: Object, ...extendingStyles: Array<Object>) {
  for (let i = 0, len = extendingStyles.length; i < len; ++i) {
    const style = extendingStyles[i]

    for (const property in style) {
      const value = style[property]
      const baseValue = base[property]

      if (typeof baseValue === 'object') {
        if (Array.isArray(baseValue)) {
          if (Array.isArray(value)) {
            base[property] = [...baseValue, ...value]
          } else {
            base[property] = [...baseValue, value]
          }
          continue
        }

        if (typeof value === 'object' && !Array.isArray(value)) {
          base[property] = assignStyle({}, baseValue, value)
          continue
        }
      }

      base[property] = value
    }
  }

  return base
}
