const router = require("express").Router();
const URLMappingService = require("../services/url-mapping.service");
const filters = require("../filters/url.filter");

router.put("/", filters.bodyFilter, URLMappingService.saveData);
router.post("/:shortURL", URLMappingService.getShortURL);
router.get("/", URLMappingService.getAllData);

router.use(filters.invalidRoute);

module.exports = router;
