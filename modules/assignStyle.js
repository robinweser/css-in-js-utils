/* @flow */
function filterUniqueArray(arr: Array<any>): Array<any> {
  return arr.filter((val, index) => arr.lastIndexOf(val) === index)
}

export default function assignStyle(
  base: Object,
  ...extendingStyles: Array<Object>
) {
  for (let i = 0, len = extendingStyles.length; i < len; ++i) {
    const style = extendingStyles[i]

    for (const property in style) {
      const value = style[property]
      const baseValue = base[property]

      if (baseValue) {
        if (Array.isArray(baseValue)) {
          base[property] = filterUniqueArray(baseValue.concat(value))
          continue
        }

        if (Array.isArray(value)) {
          base[property] = filterUniqueArray([baseValue, ...value])
          continue
        }

        if (typeof value === 'object') {
          base[property] = assignStyle({}, baseValue, value)
          continue
        }
      }

      base[property] = value
    }
  }

  return base
}
