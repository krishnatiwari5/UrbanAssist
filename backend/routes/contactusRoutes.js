const express = require("express")

const registerContactUs = require("../controllers/contactController")

const router = express.Router();

router.post("/contactus", registerContactUs)


module.exports = router
 


