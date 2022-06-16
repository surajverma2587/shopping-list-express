const { v4: uuidv4 } = require("uuid");

const { readDataFromFile, writeDataToFile } = require("../utils/fileReadWrite");

const getItems = (req, res) => {
  // get all items from file
  const items = readDataFromFile("items");

  // send all items as response
  return res.json(items);
};

const createItem = (req, res) => {
  console.log(req.body);
  // get the payload from req body
  const { name } = req.body;

  // create uuid
  const id = uuidv4();

  // create the item object
  const item = {
    id,
    name,
  };

  // get all items from file
  const data = readDataFromFile("items");

  // push new item to items
  data.items.push(item);

  // write all items to file
  writeDataToFile("items", data);

  // send response
  return res.json({
    message: "Successfully created new shopping item",
  });
};

module.exports = {
  getItems,
  createItem,
};
