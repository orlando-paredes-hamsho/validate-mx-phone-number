/**
 * Validates a Mexican Phone Number
 *
 * @param {string} phonenumber Phone Number to validate.
 *
 * @returns {boolean} Whether the Phone Number is valid or not.
 *
 * @example
 * const { isValidMxPhoneNumber } = require('validate-mx-phone-number')
 *
 * const valid = isValidMxPhoneNumber('(771)-567-7068')
 * console.log(valid) // true
 *
 * @name isValidMxPhoneNumber
 */

var driversLicenseRegex = require("./phone-number-regex");

module.exports = function(phonenumber) {
  if (typeof phonenumber !== "string") return false;
  var validator = driversLicenseRegex['default'][0];
  return validator.regex.test(phonenumber);
};
