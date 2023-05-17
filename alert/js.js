function toast({ title, message, type }) {
  const main = document.getElementById("toast"); // lấy ra element có id = toast

  if (main) {
    const toast = document.createElement("div"); // tạo ra 1 thẻ div

    const icons = {
      success: "fas fa-check-circle",
      error: "fas fa-exclamtion-circle",
    };

    const icon = icons[type];

    toast.classList.add("toast", `toast--${type}`);
    // add class 'toast' vào thẻ div vừa tạo phía trên

    toast.innerHTML = `
        <div class="toast__icon">
            <i class="${icon}"></i>
        </div>

        <div class="toast__body">
            <h3 class="toast__title text-truncate-2">${title}</h3>
            <p class="toast__msg">${message} </p>                    
        </div>
        <div class="toast__close">
            <i class="fa fa-times"></i>
        </div>
      `;
    // ném cái đống thẻ con vào toast

    main.appendChild(toast);
    // đưa thằng toast vào trong thằng main tạo ở trên đầu
    // (element có id = toast)

    // const list = document.querySelectorAll(".toast");

    // if (list.length == 4) {
    //   list[0].classList.add("hidden");
    // } else {
    // }

    const autoRemoveId = setTimeout(() => {
      main.removeChild(toast);
    }, 4000);
    // sau 3s, remove thằng toast

    toast.onclick = function (event) {
      if (event.target.closest(".toast__close")) {
        console.log(event);
        main.removeChild(toast);
        clearTimeout(autoRemoveId);
      }
    };
    // tắt elêmnt toast khi click nút toast__close
    // clear timeout sẽ clear thằng setTimeout trên
  }
}

// toast({
//   title: "Success",
//   message: "thanh cong roi !",
//   type: "success",
// });

function showSuccessToast() {
  toast({
    title: "Success",
    message: "thanh cong roi !",
    type: "success",
  });
}

function showErrorToast() {
  toast({
    title: "Error",
    message: "Có lỗi xảy ra !",
    type: "error",
  });
}
