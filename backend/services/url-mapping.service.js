const URLDao = require("../database/url.database");

exports.saveData = (req, res) => {
    const {originURL} = req.body;

    console.log(originURL);

    console.log(URLDao.find(originURL).then((data)=> {console.log(data)}));

   


    //URLDao.save(URLDatas);
    res.status(200).json({data: originURL});
};