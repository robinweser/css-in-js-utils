import unprefixProperty from '../unprefixProperty'

describe('Unprefixing properties', () => {
  it('should unprefix the property', () => {
    expect(unprefixProperty('msFlex')).toEqual('flex')
    expect(unprefixProperty('WebkitFlex')).toEqual('flex')
  })

  it('should keep an unprefixed property', () => {
    expect(unprefixProperty('flex')).toEqual('flex')
    expect(unprefixProperty('padding')).toEqual('padding')
  })
})
