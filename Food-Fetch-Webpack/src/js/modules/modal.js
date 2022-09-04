function modal() {
  const modalTrigger = document.querySelectorAll("[data-modal]"),
    modal = document.querySelector(".modal");
  // modalCloseBtn = document.querySelector("[data-close]"); // если элемент создан динамечески обработчико событий на нем работать не будет, по этому закомментирована

  function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide");
    // modal.classList.toggle("show");
    document.body.style.overflow = "hidden"; //отключить скрол
    // clearInterval(modalTimerId);
  }

  modalTrigger.forEach((btn) => {
    btn.addEventListener("click", openModal);
  });

  function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
    // modal.classList.toggle("show");
    document.body.style.overflow = ""; //скрол по умолчанию
  }

  // modalCloseBtn.addEventListener("click", closeModal); //// если элемент создан динамечески обработчико событий на нем работать не будет, по этому закомментирована

  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.getAttribute("data-close") == "") {
      //добавляем делегирование событий чтобы X работал на всех элементах
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modal.classList.contains("show")) {
      closeModal();
    }
  });

  const modalTimerId = setTimeout(openModal, 50000);

  const showModalByScroll = () => {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight
    ) {
      openModal();
      window.removeEventListener("scroll", showModalByScroll);
    }
    // console.log(window.pageYOffset); // кол-во пикселей на которое прокручен документ
    // console.log(document.documentElement.clientHeight);
    // console.log(document.documentElement.scrollHeight); // изм-ие h контента, вкл-ая содержимое, нев-ое из-за прокрутки
  };
  window.addEventListener("scroll", showModalByScroll);
}
module.exports = modal;
