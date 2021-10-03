function slugo(input) {
  return (
    input
      // Remove html tags
      .replace(/<(?:.|\n)*?>/gm, '')
      // Remove special characters
      .replace(/[!\"#$%&'\(\)\*\+,\/:;<=>\?\@\[\\\]\^`\{\|\}~]/g, '') // eslint-disable-line no-useless-escape
      // Replace dots and spaces with a short dash
      .replace(/(\s|\.)/g, '-')
      // Replace multiple dashes with a single dash
      .replace(/[-]{2,}/, '-')
      // Replace long dash with two short dashes
      .replace(/—/g, '--')
      // Make the whole thing lowercase
      .toLowerCase()
  )
}

if (typeof module !== 'undefined') {
  // For CommonJS default export support
  module.exports = slugo
  module.exports.default = slugo
}

export default slugo
