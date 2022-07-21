const URLDao = require("../database/url.database");
const nanoid = require("nanoid");

exports.saveData = async (req, res) => {
  const { originURL } = req.body;

  try {
    let checkIfDataExists = await URLDao.find(originURL);
    if (checkIfDataExists) {
      return res.status(409).json({ data: checkIfDataExists });
    } else {
      let urlMappingData = await generateShortURL(originURL);
      const urlData = await URLDao.save(urlMappingData);
      return res.status(200).json({ data: urlData });
    }
  } catch {
    return res.status(500).json({ message: "Oops something went wrong." });
  }
};

exports.getShortURL = async (req, res) => {
  const shortURL = req.params.shortURL;
  if (shortURL) {
    const urlData = await URLDao.find(shortURL);
    if (urlData) {
      urlData.clicks++;
      URLDao.save(urlData);
      res.status(200).json({ data: urlData });
    } else {
      res
        .status(400)
        .json({ message: "Short URL does not exists, please create new one." });
    }
  } else {
    res.status(400).json({ message: "No shorturl present." });
  }
};

exports.getAllData = async (req, res) => {
  try {
    let listURLData = await URLDao.getAll();
    return res.status(200).send(listURLData);
  } catch (err) {
    return res.status(500).json({ message: "Oops something went wrong." });
  }
};

async function generateShortURL(originURL) {
  let dbSaveURLData = {
    originURL: originURL,
    shortURL: "",
    clicks: 0,
  };
  try {
    dbSaveURLData.shortURL = await nanoid(5);
    return dbSaveURLData;
  } catch (err) {
    return res.status(500).json({ message: "Oops something went wrong!" });
  }
}
