const fn = require('../src/index')

describe('default function', () => {
  it('returns true', () => {
    expect(fn()).toEqual(true)
  })
  describe('when flag', () => {
    it('returns false', () => {
      expect(fn(true)).toEqual(false)
    })
  })
})
