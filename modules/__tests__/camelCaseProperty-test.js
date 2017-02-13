import camelCaseProperty from '../camelCaseProperty'

describe('Camel casing properties', () => {
  it('should camel case properties', () => {
    expect(camelCaseProperty('transition-delay')).toEqual('transitionDelay')
    expect(camelCaseProperty('-webkit-transition-delay')).toEqual('WebkitTransitionDelay')
    expect(camelCaseProperty('-ms-transition')).toEqual('msTransition')
  })
})
