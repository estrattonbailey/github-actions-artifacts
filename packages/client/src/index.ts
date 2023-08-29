import path from 'path'
import ms from 'ms'

export function test() {
  const p = path.join('a', 'b')
  const m = ms('1d')
  return { p, m }
}
