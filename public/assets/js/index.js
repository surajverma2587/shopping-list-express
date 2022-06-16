const shoppingListElement = $("#shopping-list");

const getShoppingList = async () => {
  const response = await fetch("/api/items");

  const data = await response.json();

  return data;
};

const handleClick = (event) => {
  const target = $(event.target);

  if (target.is('button[name="edit-btn"]')) {
    const itemId = target.attr("data-item-id");

    window.location.assign(`/edit/${itemId}`);
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
