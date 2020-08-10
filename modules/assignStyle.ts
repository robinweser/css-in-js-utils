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

    for (const property in style) {
      const value = style[property]
      const baseValue = base[property]

      if (baseValue && value) {
        if (Array.isArray(baseValue)) {
          base[property] = filterUniqueArray(baseValue.concat(value))
          continue
        }

        if (Array.isArray(value)) {
          base[property] = filterUniqueArray([baseValue, ...value])
          continue
        }

        if (typeof value === 'object') {
          base[property] = assignStyle({}, baseValue as StyleObject, value)
          continue
        }
      }

      base[property] = value
    }
  }

  return base
}
