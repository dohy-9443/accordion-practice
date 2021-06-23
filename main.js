document.addEventListener("DOMContentLoaded", () => {
  const mainLists = document.querySelectorAll(".mainList");
  const click = document.querySelector(".click");
  const close = document.querySelector(".close");
  const accordion = document.querySelector(".accordion");

  click.addEventListener("click", () => {
    accordion.classList.add("display");
  });

  close.addEventListener("click", () => {
    accordion.classList.remove("display");
  });

  function closeAll(item) {
    mainLists.forEach((mainList, _) => {
      if (mainList !== item) {
        mainList.classList.remove("open");
      }
    });
  }

  mainLists.forEach((item) => {
    item.addEventListener("click", () => {
      closeAll(item);
      item.classList.toggle("open");
    });
  });
});
