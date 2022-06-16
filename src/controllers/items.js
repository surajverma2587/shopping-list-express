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

const getItem = (req, res) => {
  // get id from req
  const { itemId } = req.params;

  // get all items from file
  const { items } = readDataFromFile("items");

  // find item by itemId
  const item = items.find((item) => item.id === itemId);

  // return response with item
  return res.json(item);
};

const updateItem = (req, res) => {
  // get id from req
  const { itemId } = req.params;

  // get the payload from req body
  const { name } = req.body;

  // get all items from file
  const { items } = readDataFromFile("items");

  // find item by itemId and update the item with new name
  const updatedItems = items.map((item) => {
    if (item.id === itemId) {
      item.name = name;
      return item;
    }

    return item;
  });

  writeDataToFile("items", { items: updatedItems });

  // send response
  return res.json({
    message: "Successfully updated shopping item",
  });
};

const deleteItem = (req, res) => {
  // get id from req
  const { itemId } = req.params;

  // get all items from file
  const { items } = readDataFromFile("items");

  // remove item from file
  const filteredItems = items.filter((item) => item.id !== itemId);

  writeDataToFile("items", { items: filteredItems });

  // send response
  return res.json({
    message: "Successfully deleted shopping item",
  });
};

module.exports = {
  getItems,
  createItem,
  getItem,
  updateItem,
  deleteItem,
};
