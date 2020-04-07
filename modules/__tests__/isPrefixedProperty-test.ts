import isPrefixedProperty from '../isPrefixedProperty'

describe('Checking for prefixed properties', () => {
  it('should return true', () => {
    expect(isPrefixedProperty('WebkitTransition')).toEqual(true)
    expect(isPrefixedProperty('msTransitionDelay')).toEqual(true)
  })

  it('should return false', () => {
    expect(isPrefixedProperty('transition')).toEqual(false)
    expect(isPrefixedProperty('transitionDelay')).toEqual(false)
  })
})
