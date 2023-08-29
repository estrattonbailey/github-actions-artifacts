import { test } from '../'

describe('test', () => {
  it('works', () => {
    expect(test()).toEqual({
      p: 'a/b',
      m: 86400000,
    })
  })
})
