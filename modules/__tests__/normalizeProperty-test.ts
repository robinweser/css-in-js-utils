import normalizeProperty from '../normalizeProperty'

describe('Normalizing properties', () => {
  it('should camel case hypenated properties', () => {
    expect(normalizeProperty('transition-delay')).toEqual('transitionDelay')
  })

  it('should unprefix properties', () => {
    expect(normalizeProperty('WebkitTransitionDelay')).toEqual(
      'transitionDelay'
    )
  })

  it('should unprefix and camel case properties', () => {
    expect(normalizeProperty('-webkit-transition-delay')).toEqual(
      'transitionDelay'
    )
  })
})
