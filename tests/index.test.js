import { success, fail, inProgress } from '../src'

test('success creates correct string', () => {
  expect(success('LOGIN')).toBe('LOGIN__SUCCESS')
})

test('fail creates correct string', () => {
  expect(fail('LOGIN')).toBe('LOGIN__FAILURE')
})

test('inProgress creates correct string', () => {
  expect(inProgress('LOGIN')).toBe('LOGIN__IN_PROGRESS')
})
