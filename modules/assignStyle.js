/* @flow */
export default function assignStyle(base: Object, ...extendingStyles: Array<Object>) {
  for (let i = 0, len = extendingStyles.length; i < len; ++i) {
    const style: Object = extendingStyles[i]

    for (const property: string in style) {
      const value: any = style[property]
      const baseValue: any = base[property]

      if (baseValue instanceof Object) {
        if (Array.isArray(baseValue)) {
          if (Array.isArray(value)) {
            base[property] = [...baseValue, ...value]
          } else {
            base[property] = [...baseValue, value]
          }
          continue
        }

        if (value instanceof Object && !Array.isArray(value)) {
          base[property] = assignStyle({}, baseValue, value)
          continue
        }
      }

      base[property] = value
    }
  }

  return base
}
