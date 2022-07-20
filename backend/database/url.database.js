const URLMapping = require("./models/url.model");

exports.save = async (URLData) => {
    const URLDatabase = new URLMapping(URLData);
    return await URLDatabase.save();
};

exports.getAll = async () => {
    return await URLMapping.find({});
};

exports.find = async (originURL) => {
    return await URLMapping.findOne({originURL: originURL});
};

exports.update = async (URLData) => {
    return URLMapping.updateOne({id: URLData.id, URLData});
};