const items = document.querySelectorAll(".aside__body-item");

items.forEach((item) => {
  item.addEventListener("click", function (event) {
    items.forEach((el) => {
      el.classList.remove("active");
      item.classList.add("active");
      console.log(event.target)
    });
  });
});

const menuSideBar = document.querySelector(".aside__body-items");
