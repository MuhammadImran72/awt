const router = require("express").Router();
const multer = require("multer");
//const { checkToken, isAdmin } = require("../../auth/token_validation");
const { login, signUp } = require("./user.controller");

const use = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

router.post("/", signUp);
router.post("/login", login);

module.exports = router;
