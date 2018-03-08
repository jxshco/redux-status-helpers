import { success, fail, in_progress } from '../src'

test('success creates correct string', () => {
  expect(success('LOGIN')).toBe('LOGIN__SUCCESS')
})

test('fail creates correct string', () => {
  expect(fail('LOGIN')).toBe('LOGIN__FAILURE')
})

test('in_progress creates correct string', () => {
  expect(in_progress('LOGIN')).toBe('LOGIN__IN_PROGRESS')
})
