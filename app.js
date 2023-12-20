const menuBar = document.querySelector("#menu");
const navlist = document.querySelector("#nav-list");

menuBar.addEventListener("click", function () {
  if (navlist.classList.contains("active")) {
    navlist.classList.remove("active");
    console.log(menuBar);
  } else {
    navlist.classList.add("active");
  }
});
