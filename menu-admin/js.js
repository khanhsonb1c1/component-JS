const items = document.querySelectorAll(".aside__body-item");


items.forEach((item) => {
  item.addEventListener("click", function (event) {
    items.forEach((el) => {
      el.classList.remove("active");
    });
    event.target.classList.add("active");
  });
});
