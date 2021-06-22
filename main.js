document.addEventListener("DOMContentLoaded", () => {
  const mainLists = document.querySelectorAll(".mainList");
  const mainListUls = document.querySelectorAll(".mainList-inner");

  function same(item) {
    for (let i = 0; i < mainListUls.length; i++) {
      if (i !== item) {
        mainListUls.forEach((listUl, _) => {
          listUl.style.display = "none";
        });
      }
    }
  }

  mainLists.forEach((lsit, item) => {
    same(item);
    lsit.addEventListener("click", function () {
      mainListUls.forEach((listUl2, _) => {
        listUl2.style.display = "block";
      });
    });
  });
});
