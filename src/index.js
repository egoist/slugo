export default function (input, {
  transform
} = {}) {
  input = input
    // Remove html tags
    .replace(/<(?:.|\n)*?>/gm, '')
    // Remove special characters
    .replace(/[!\"#$%&'\(\)\*\+,\/:;<=>\?\@\[\\\]\^`\{\|\}~]/g, '') // eslint-disable-line no-useless-escape
    // Replace dots and spaces with a sepeator
    .replace(/(\s|\.)/g, '-')
    // Make the whole thing lowercase
    .toLowerCase()

  if (transform) {
    input = transform(input)
  }

  return input
}
