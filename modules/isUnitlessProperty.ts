import hyphenateProperty from './hyphenateProperty'

const unitlessProperties: { [key: string]: boolean } = {
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  fontWeight: true,
  lineHeight: true,
  opacity: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true,
}

const prefixedUnitlessProperties = [
  'animationIterationCount',
  'boxFlex',
  'boxFlexGroup',
  'boxOrdinalGroup',
  'columnCount',
  'flex',
  'flexGrow',
  'flexPositive',
  'flexShrink',
  'flexNegative',
  'flexOrder',
  'gridColumn',
  'gridColumnEnd',
  'gridColumnStart',
  'gridRow',
  'gridRowEnd',
  'gridRowStart',
  'lineClamp',
  'order',
]

const prefixes = ['Webkit', 'ms', 'Moz', 'O']

function getPrefixedProperty(prefix: string, property: string) {
  return prefix + property.charAt(0).toUpperCase() + property.slice(1)
}

// add all prefixed properties to the unitless properties
for (let i = 0, len = prefixedUnitlessProperties.length; i < len; ++i) {
  const property = prefixedUnitlessProperties[i]
  unitlessProperties[property] = true

  for (let j = 0, jLen = prefixes.length; j < jLen; ++j) {
    unitlessProperties[getPrefixedProperty(prefixes[j], property)] = true
  }
}

// add all hypenated properties as well
for (const property in unitlessProperties) {
  unitlessProperties[hyphenateProperty(property)] = true
}

export default function isUnitlessProperty(property: string) {
  return unitlessProperties.hasOwnProperty(property)
}
