const router = require("express").Router();
const URLMappingService = require("../services/url-mapping.service");
router.use("/", URLMappingService.saveData);

module.exports = router;