export default function (input) {
  return input
    // Remove html tags
    .replace(/<(?:.|\n)*?>/gm, '')
    // Remove special characters
    .replace(/[!\"#$%&'\(\)\*\+,\/:;<=>\?\@\[\\\]\^`\{\|\}~]/g, '') // eslint-disable-line no-useless-escape
    // Replace dots and spaces with a short dash
    .replace(/(\s|\.)/g, '-')
    // Replace long dash with two short dashes
    .replace(/—/g, '--')
    // Make the whole thing lowercase
    .toLowerCase()
}
