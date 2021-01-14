const bcrypt = require("bcryptjs");

/**
 * isEmpty helper method
 * @param {string} input
 * @returns {Boolean} True or False
 */

const isEmpty = input => {
    if (input === undefined || input === "") {
      return true;
    }
    if (input.replace(/\s/g, "").length) {
      return false;
    }
    return true;
  };
  

/**
 * isValidEmail helper method
 * @param {string} email
 * @returns {Boolean} True or False
 */

const isValidEmail = email => {
  const regEx = /\S+@\S+\.\S+/;
  return regEx.test(email);
};

/**
 * validatePassword helper method
 * @param {string} password
 * @returns {Boolean} True or False
 */

const validatePassword = password => {
  if (password.length <= 5 || password === "") {
    return false;
  }
  return true;
};
/**
 * Hash password
 * @param {string} password
 * @returns {string} hashed password
 */
const hashPassword = password => {
  const saltRounds = 10;
  bcrypt.getSalt(saltRounds, (err, salt) => {
    if (err) throw err;
    bcrypt.hash(password, salt, (err, hash) => {
      if (err) throw err;
      return hash;
    });
  });
};


module.exports = {
    isValidEmail,
    validatePassword,
    hashPassword,
    isEmpty
}
