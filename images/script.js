const currentUrl = document.location.href;
const currentPathname = document.location.pathname;
const currentTitle = document.title;
const metaTag = document.querySelectorAll("meta");
const categoryItems = document.querySelectorAll("#categoryBar a");
const searchInput = document.querySelector("#searchBar input");
const searchClose = document.querySelector("#searchBar .close");
const listBar = document.querySelector("#listBar");
const listItems = document.querySelectorAll("#listBar a");

categoryItems.forEach(item =>
  item.href == currentUrl
    ? item.classList.add("selected")
    : item.classList.remove("selected")
);

if (currentPathname == "/") {
  categoryItems[0].classList.add("selected");
} else if (currentPathname == "/category") {
  metaTag.forEach(meta =>
    meta.content == currentTitle ? (meta.content = "전체 글 | 삽질일지") : ""
  );
  document.title = "전체 글 | 삽질일지";
} else {
  metaTag.forEach(meta =>
    meta.content == currentTitle ? (meta.content = currentTitle + " | 삽질일지") : ""
  );
  document.title += " | 삽질일지";
}

let searchInputValue = searchInput.value;
function searchInputChange(e) {
  searchInputValue = e.value;
  if (searchInputValue.length > 0) {
    searchClose.classList.add("show");
  } else {
    searchClose.classList.remove("show");
  }
}

searchInputChange(searchInput);

searchClose.addEventListener("click", () => {
  currentPathname.includes("/search/") ? (location.href = "/") : (searchInput.value = "");
  searchClose.classList.remove("show");
});

listItems[0].classList.add("first");
listItems[listItems.length - 1].classList.add("last");

if (listItems.length >= 11) {
  listItems.forEach(item => item.classList.add("scroll"));
} else {
  listItems.forEach(item => item.classList.remove("scroll"));
}

listBar.addEventListener("scroll", () => {
  if (listBar.scrollTop > 0) {
    listBar.classList.add("border");
  } else {
    listBar.classList.remove("border");
  }
});
