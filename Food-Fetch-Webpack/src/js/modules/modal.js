function openModal(modalSelector, modalTimerId) {
  const modal = document.querySelector(modalSelector);
  modal.classList.add("show");
  modal.classList.remove("hide");
  // modal.classList.toggle("show");
  document.body.style.overflow = "hidden"; //отключить скрол
  console.log(modalTimerId);
  if (modalTimerId) {
    clearInterval(modalTimerId);
  }
}

function closeModal(modalSelector) {
  const modal = document.querySelector(modalSelector);
  modal.classList.add("hide");
  modal.classList.remove("show");
  // modal.classList.toggle("show");
  document.body.style.overflow = ""; //скрол по умолчанию
}

function modal(triggerSelector, modalSelector, modalTimerId) {
  const modalTrigger = document.querySelectorAll(triggerSelector),
    modal = document.querySelector(modalSelector);
  // modalCloseBtn = document.querySelector("[data-close]"); // если элемент создан динамечески обработчико событий на нем работать не будет, по этому закомментирована

  modalTrigger.forEach((btn) => {
    btn.addEventListener("click", () => openModal(modalSelector, modalTimerId)); // оборачиваем в стрелочную функцию, чтобы при загрузке страницы функция не выполнилась. а выполнялась только по клику
  });

  // modalCloseBtn.addEventListener("click", closeModal); //// если элемент создан динамечески обработчико событий на нем работать не будет, по этому закомментирована

  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.getAttribute("data-close") == "") {
      //добавляем делегирование событий чтобы X работал на всех элементах
      closeModal(modalSelector);
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modal.classList.contains("show")) {
      closeModal(modalSelector);
    }
  });

  const showModalByScroll = () => {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight
    ) {
      openModal(modalSelector, modalTimerId);
      window.removeEventListener("scroll", showModalByScroll);
    }
    // console.log(window.pageYOffset); // кол-во пикселей на которое прокручен документ
    // console.log(document.documentElement.clientHeight);
    // console.log(document.documentElement.scrollHeight); // изм-ие h контента, вкл-ая содержимое, нев-ое из-за прокрутки
  };
  window.addEventListener("scroll", showModalByScroll);
}
export default modal;
export { closeModal };
export { openModal };
