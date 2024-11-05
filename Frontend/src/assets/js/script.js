const apiUrl = "http://localhost:3000/api/items";

// Function to fetch and display items
async function fetchItems() {
  const response = await fetch(apiUrl);
  const items = await response.json();
  const itemsTableBody = $("#itemsTableBody");
  itemsTableBody.empty();

  items.forEach((item) => {
    itemsTableBody.append(`
                    <tr>
                        <td>${item.id}</td>
                        <td>${item.name}</td>
                        <td>${item.price}</td>
                        <td>
                            <button class="btn btn-info btn-sm" onclick="editItem(${item.id}, '${item.name}', ${item.price})">Edit</button>
                            <button class="btn btn-danger btn-sm" onclick="deleteItem(${item.id})">Delete</button>
                        </td>
                    </tr>
                `);
  });
}

// Function to handle form submission for create/update
$("#itemForm").on("submit", async function (event) {
  event.preventDefault();

  const id = $("#itemId").val();
  const name = $("#itemName").val();
  const price = $("#itemPrice").val();

  const itemData = { name, price };

  let response;
  if (id) {
    // Update item if ID is present
    response = await fetch(`${apiUrl}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(itemData),
    });
  } else {
    // Create new item if no ID
    response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(itemData),
    });
  }

  if (response.ok) {
    $("#responseMessage").html(
      '<div class="alert alert-success">Item saved successfully!</div>'
    );
    $("#itemForm")[0].reset();
    $("#itemId").val("");
    fetchItems();
  } else {
    $("#responseMessage").html(
      '<div class="alert alert-danger">Error saving item.</div>'
    );
  }
});

// Function to pre-fill the form for editing an item
function editItem(id, name, price) {
  $("#itemId").val(id);
  $("#itemName").val(name);
  $("#itemPrice").val(price);
}

// Function to delete an item
async function deleteItem(id) {
  if (confirm("Are you sure you want to delete this item?")) {
    const response = await fetch(`${apiUrl}/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      $("#responseMessage").html(
        '<div class="alert alert-success">Item deleted successfully!</div>'
      );
      fetchItems();
    } else {
      $("#responseMessage").html(
        '<div class="alert alert-danger">Error deleting item.</div>'
      );
    }
  }
}

// Initial fetch to populate the table
fetchItems();