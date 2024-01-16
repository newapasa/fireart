function toggleHide(elementId) {
  const element = document.getElementById(elementId);

  element.classList.toggle("hide-lists");
}

function toggleHideItems(elementId) {
  const element = document.getElementById(elementId);

  element.classList.toggle("show-list-items");
  element.classList.toggle("hide-list-items");
}
