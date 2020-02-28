import { success, failure, cancelled } from '../src';

test('success creates correct string', () => {
  expect(success('LOGIN')).toBe('LOGIN__SUCCESS');
});

test('fail creates correct string', () => {
  expect(failure('LOGIN')).toBe('LOGIN__FAILURE');
});

test('cancelled creates correct string', () => {
  expect(cancelled('LOGIN')).toBe('LOGIN__CANCELLED');
});
