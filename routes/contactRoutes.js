const express = require("express");
const router = express.Router();
const {getContacts, createContacts, getContact, UpdateConatact, deletecontact} = require("../controllers/contactcontroller");

router.route("/").get(getContacts).post(createContacts);

router.route("/:id").get(getContact).put(UpdateConatact).delete(deletecontact);

module.exports = router;