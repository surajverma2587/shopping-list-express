const newItemForm = $("#new-item-form");
const shoppingItemInput = $("#shopping-item-input");

const handleSubmit = async (event) => {
  event.preventDefault();

  const newItem = shoppingItemInput.val();

  if (!newItem) {
    console.log("handle error");
  } else {
    // create POST request payload
    const payload = {
      name: newItem,
    };

    // make a POST request to /api/items
    const response = await fetch("/api/items", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    window.location.assign("/");
  }
};

newItemForm.submit(handleSubmit);
