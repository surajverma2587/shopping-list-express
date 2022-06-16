const updateItemForm = $("#update-item-form");
const shoppingItemInput = $("#shopping-item-input");
// get id from URL
const id = window.location.pathname.split("/")[2];

const getItem = async (id) => {
  const response = await fetch(`/api/items/${id}`);

  const data = await response.json();

  return data;
};

const handleSubmit = async (event) => {
  event.preventDefault();

  const payload = {
    name: shoppingItemInput.val(),
  };

  // make a PUT request to /api/items
  const response = await fetch(`/api/items/${id}`, {
    method: "PUT",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  });

  await response.json();

  window.location.assign("/");
};

const onReady = async () => {
  const { name } = await getItem(id);

  shoppingItemInput.val(name);
};

$(document).ready(onReady);
updateItemForm.submit(handleSubmit);
