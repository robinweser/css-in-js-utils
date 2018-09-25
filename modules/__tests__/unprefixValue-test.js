import unprefixValue from '../unprefixValue'

describe('Unprefixing values', () => {
  it('should unprefix the value', () => {
    expect(unprefixValue('-webkit-calc(100% - 20px)')).toEqual(
      'calc(100% - 20px)'
    )
    expect(unprefixValue('-ms-transition')).toEqual('transition')
  })

  it('should keep an unprefixed value', () => {
    expect(unprefixValue('300px')).toEqual('300px')
    expect(unprefixValue(300)).toEqual(300)
    expect(unprefixValue('calc(100% - 20px)')).toEqual('calc(100% - 20px)')
  })
})
