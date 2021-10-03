import slugo from '../src'

test('main', () => {
  expect(slugo('hello world, <strong>my kitten!</strong>')).toBe('hello-world-my-kitten')
  expect(slugo('hello world')).toBe('hello-world')
  expect(slugo('hello    world')).toBe('hello-world')
  expect(slugo('hello world.$%#')).toBe('hello-world-')
})
