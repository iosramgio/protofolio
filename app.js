// Step 1: Get all the buttons with class "btn" inside the menu
const buttons = document.querySelectorAll(".menu .btn");

// Step 2: Get all the elements with class "store-item"
const storeItems = document.querySelectorAll(".store-item");

// Step 3: Add click event listeners to each button
buttons.forEach((button) => {
  button.addEventListener("click", filterItems);
});

// Step 4: Define the function that will handle the filtering
function filterItems(e) {
  // Step 5: Prevent the default behavior of the clicked button (e.g., navigating to a new page)
  e.preventDefault();

  // Step 6: Get the value of the data-filter attribute of the clicked button
  const filter = e.target.getAttribute("data-filter");

  // Step 7: Loop through all the store items
  storeItems.forEach((item) => {
    // Step 8: Check if the data-filter attribute of the item matches the filter value or if the filter is "all"
    if (filter === "all" || item.classList.contains(filter)) {
      // Step 9: If it matches or the filter is "all", display the item by setting its display style to "block"
      item.classList.add('visible');
      item.classList.remove('hidden');
    } else {
      // Step 10: If it doesn't match the filter, hide the item by setting its display style to "none"
      item.classList.add('hidden');
      item.classList.remove('visible');
    }
  });

  // Step 11: Remove the "active" class from all buttons
  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  // Step 12: Add the "active" class to the clicked button to highlight the active filter
  e.target.classList.add("active");
}
