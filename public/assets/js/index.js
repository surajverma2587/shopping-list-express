const shoppingListElement = $("#shopping-list");

const getShoppingList = async () => {
  // const response = await fetch("/api/items");

  // const data = await response.json();

  // return data;

  return {
    items: [
      {
        id: "f031df58-30a8-4125-bcc7-f89e094a5a3b",
        name: "Item 1",
      },
      {
        id: "14e60076-78d8-4f4e-b453-c172721db46f",
        name: "Item 2",
      },
      {
        id: "b942b355-ccc8-4705-a294-4db793645fd6",
        name: "Item 3",
      },
      {
        id: "b838f1dc-de1a-42be-b3e5-d152aa402cf5",
        name: "Item 4",
      },
    ],
  };
};

const handleClick = (event) => {
  const target = $(event.target);

  if (target.is('button[name="edit-btn"]')) {
    const itemId = target.attr("data-item-id");
    console.log("Edit", itemId);
    // redirect to /edit/itemId
  }

  if (target.is('button[name="delete-btn"]')) {
    const itemId = target.attr("data-item-id");
    console.log("Delete", itemId);
  }
};

const renderListItems = (items) => {
  const listItems = items
    .map((item) => {
      return `<li
        class="list-group-item d-flex flex-row flex-wrap justify-content-between align-items-center"
      >
        <div>${item.name}</div>
        <div>
          <button class="btn btn-secondary" name="edit-btn" data-item-id="${item.id}">Edit</button>
          <button class="btn btn-danger" name="delete-btn" data-item-id="${item.id}">Delete</button>
        </div>
      </li>`;
    })
    .join("");

  shoppingListElement.append(
    `<ul class="list-group" id="shopping-list-container">${listItems}</ul>`
  );

  $("#shopping-list-container").click(handleClick);
};

const onReady = async () => {
  const { items } = await getShoppingList();

  renderListItems(items);
};

$(document).ready(onReady);
