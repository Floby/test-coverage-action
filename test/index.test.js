const fn = require('../src/index')

describe('default function', () => {
  it('returns true', () => {
    expect(fn()).toEqual(true)
  })
})
