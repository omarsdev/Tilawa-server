const router = require("express").Router();
const { getMe, getUser, getUsers } = require("../controller/user.controller");

const { protectEmployee, protectUser, protectTeacher } = require('../middleware/auth')

router.route("/").get(protectEmployee, getUsers);
router.route("/me").get(protectUser, getMe);
router.route("/user-info/:userId").get(protectTeacher, getUser);
router.route("/:userId").get(protectEmployee, getUser);

module.exports = router;