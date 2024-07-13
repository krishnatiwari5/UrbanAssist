const express = require("express")

const handleSearchLocation = require("../controllers/locationSearchController")

const router = express.Router() 

router.post("/:locationSearch", handleSearchLocation) 

module.exports = router 