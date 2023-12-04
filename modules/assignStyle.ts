function filterUniqueArray(arr: any[]) {
  return arr.filter((val, index) => arr.lastIndexOf(val) === index)
}

type StyleObject = {
  [key: string]:
    | string
    | number
    | StyleObject
    | (string | number | StyleObject)[]
}

export default function assignStyle(
  base: StyleObject,
  ...extendingStyles: StyleObject[]
) {
  for (let i = 0, len = extendingStyles.length; i < len; ++i) {
    const style = extendingStyles[i]

    const keys = Object.keys(style)
    for (let j = 0, len2 = keys.length; j < len2; j++) {
      const property = keys[j]
      const value = style[property]
      const baseValue = base[property]

      if (baseValue && value) {
        if (Array.isArray(baseValue)) {
          base[property] = filterUniqueArray(baseValue.concat(value))
          // eslint-disable-next-line no-continue
          continue
        }

        if (Array.isArray(value)) {
          base[property] = filterUniqueArray([baseValue, ...value])
          // eslint-disable-next-line no-continue
          continue
        }

        if (typeof value === 'object') {
          base[property] = assignStyle({}, baseValue as StyleObject, value)
          // eslint-disable-next-line no-continue
          continue
        }
      }

      base[property] = value
    }
  }

  return base
}
