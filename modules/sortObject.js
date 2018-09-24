/* @flow */
import isPrefixedProperty from '../isPrefixedProperty'

export default function sortObject(obj: Object): Object {
  return Object.keys(obj).sort((left, right) => {
    if (isPrefixedProperty(left)) {
      return -1
    }

    return left > right ? 1 : -1
  })
}
