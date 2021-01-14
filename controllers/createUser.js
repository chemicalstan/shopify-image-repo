const bcrypt = require("bcryptjs");
const passport = require("../config/passport");
const User = require("../models/User");
const {status} = require('../helpers/status');
const {
  isEmpty,
  isValidEmail,
  validatePassword,
  hashPassword
} = require("../helpers/validations");

/**
 * Create user
 * @param {object} req
 * @param {object} res
 * @returns {object} reflection object
 */

const CreateUser = async (req, res) => {
  const { name, email, password } = req.body;
};

module.exports = CreateUser
