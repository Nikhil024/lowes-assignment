const router = require("express").Router();

router.use("/", (req, res)=> {
    console.log(req.body);
});

module.exports = router;