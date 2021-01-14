const express = require("express");
const router = express.Router();
const { ensureAuthenticated } = require("../config/auth");

router.get("/", require('../controllers/getImages'));

router.post("/", ensureAuthenticated, require('../controllers/uploadImage'));
