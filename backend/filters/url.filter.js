exports.bodyFilter = (req, res, next) => {
  if (req.body) {
    if (req.body.originURL || req.body.shortURL) {
      next();
    } else {
      return res.status(400).json({ message: "Invalid body param." });
    }
  } else {
    return res.status(400).json({ message: "Invalid body param." });
  }
};

/* exports.noBodyRequiredFilter = (req, res, next) => {
  console.log(!req.body);
  if (req.body != undefined || req.body != null) {
    return res.status(400).json({ message: "No body param required." });
  } else {
    next();
  }
};
*/
exports.invalidRoute = (req, res) => {
  res.status(400).json({ message: "Invalid Route." });
};
