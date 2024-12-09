// Load the saved bucket list from localStorage
document.addEventListener("DOMContentLoaded", loadBucketList);

// Function to load the bucket list from localStorage
function loadBucketList() {
    const bucketList = document.getElementById("bucket-list");

    // Retrieve the saved list from localStorage, if any
    const savedItems = JSON.parse(localStorage.getItem("bucketListItems")) || [];

    // Render each saved item on the page
    savedItems.forEach(item => {
        const newItem = createListItem(item);
        bucketList.appendChild(newItem);
    });
}

// Function to add a new bucket list item
function addItem() {
    const itemInput = document.getElementById("bucket-item");
    const bucketList = document.getElementById("bucket-list");

    // Check if the input is not empty
    if (itemInput.value.trim() === "") {
        alert("Please enter a valid bucket list item!");
        return;
    }

    // Create a new list item element
    const newItem = createListItem(itemInput.value);

    // Append the new item to the list
    bucketList.appendChild(newItem);

    // Save the updated list in localStorage
    saveBucketList();

    // Clear the input field
    itemInput.value = "";
}

// Function to create a list item element
function createListItem(itemText) {
    const newItem = document.createElement("li");

    // Create a span to hold the item text
    const itemSpan = document.createElement("span");
    itemSpan.textContent = itemText;

    // Create a delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-btn");
    deleteButton.onclick = function () {
        // Remove the item from the list
        newItem.remove();

        // Save the updated list in localStorage
        saveBucketList();
    };

    // Append the text and delete button to the new item
    newItem.appendChild(itemSpan);
    newItem.appendChild(deleteButton);

    return newItem;
}

// Function to save the current bucket list in localStorage
function saveBucketList() {
    const bucketList = document.getElementById("bucket-list");
    const items = Array.from(bucketList.children).map(item => item.querySelector("span").textContent);

    // Save the items array to localStorage
    localStorage.setItem("bucketListItems", JSON.stringify(items));
}

// Remove item function for predefined list items
function removeItem(button) {
    const item = button.parentElement;
    item.parentElement.removeChild(item);

    // Save the updated list in localStorage
    saveBucketList();
}
