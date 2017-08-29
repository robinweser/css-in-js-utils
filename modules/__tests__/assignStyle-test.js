import assignStyle from '../assignStyle'

describe('Assinging styles', () => {
  it('should merge properties', () => {
    expect(assignStyle({ color: 'red' }, { fontSize: 12 }, { lineHeight: 1 })).toEqual({
      color: 'red',
      fontSize: 12,
      lineHeight: 1
    })
  })

  it('should overwrite properties from right to left', () => {
    expect(assignStyle({ fontSize: 12 }, { fontSize: 16 }, { fontSize: 11 })).toEqual({ fontSize: 11 })
  })

  it('should merge nested objects', () => {
    expect(
      assignStyle(
        {
          fontSize: 12,
          ob2: { color: 'red' },
          ob3: { color: 'red' }
        },
        {
          fontSize: 16,
          ob2: { fontSize: 12 }
        },
        {
          fontSize: 11,
          ob3: { color: 'blue' }
        }
      )
    ).toEqual({
      fontSize: 11,
      ob2: {
        color: 'red',
        fontSize: 12
      },
      ob3: { color: 'blue' }
    })
  })

  it('should not overwrite objects other than the first one', () => {
    const ob1 = { color: 'red' }
    const ob2 = { fontSize: 12 }

    const newOb = assignStyle({}, ob1, ob2)

    expect(newOb).toEqual({
      color: 'red',
      fontSize: 12
    })

    newOb.foo = 'bar'
    expect(ob1).toEqual({ color: 'red' })
    expect(ob2).toEqual({ fontSize: 12 })
  })

  it('should use the first object as base', () => {
    const ob1 = { color: 'red' }
    const ob2 = { fontSize: 12 }

    const newOb = assignStyle(ob1, ob2)

    expect(newOb).toEqual({
      color: 'red',
      fontSize: 12
    })
    expect(ob1).toEqual(newOb)

    newOb.foo = 'bar'
    expect(ob1).toEqual({
      color: 'red',
      fontSize: 12,
      foo: 'bar'
    })
  })

  it('should overwrite previous values when both values are array', () => {
    const ob1 = { fontSize: ['10px', '10rem'] }
    const ob2 = { fontSize: ['10px', '20vw'] }

    const newOb = assignStyle({}, ob1, ob2)

    expect(newOb).toEqual({ fontSize: ['10px', '20vw'] })
  })

  it('should overwrite previous values when only the last value is an array', () => {
    const ob1 = { fontSize: 10 }
    const ob2 = { fontSize: ['10px', '20vw'] }

    const newOb = assignStyle({}, ob1, ob2)

    expect(newOb).toEqual({ fontSize: ['10px', '20vw'] })
  })

  it('should overwrite previous values when only the first value is an array', () => {
    const ob1 = { fontSize: ['10px', '10rem'] }
    const ob2 = { fontSize: 20 }

    const newOb = assignStyle({}, ob1, ob2)

    expect(newOb).toEqual({ fontSize: 20 })
  })
})
