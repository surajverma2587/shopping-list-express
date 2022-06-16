const { readDataFromFile } = require("../utils/fileReadWrite");

const getItems = (req, res) => {
  // get all items from file
  const items = readDataFromFile("items");

  // send all items as response
  return res.json(items);
};

module.exports = {
  getItems,
};
