/**
 * List of Mexican Phone Number regexes
 *
 */

module.exports = {
  default: [
    {
      regex: /^(\(\d{3}\)[.-]?|\d{3}[.-]?)?\d{3}[.-]?\d{4}$/,
      description: 'Phone number must be 10 numbers and it can contain parentesis and dashes',
    },
  ]
};
