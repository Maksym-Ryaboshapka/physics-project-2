const backdrop = document.querySelector(".dew-backdrop");
const modal = document.querySelector(".dew-modal");
const closeBtn = document.querySelector(".dew-modal__close");
const openBtn = document.querySelector(".explanation__span");

export const handleModal = () => {
  const openModal = (e) => {
    openBtn.removeEventListener("click", openModal);

    closeBtn.addEventListener("click", closeModal);
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) closeModal();
    });
    document.addEventListener("keydown", (e) => {
      if (e.code === "Escape") closeModal();
    });

    backdrop.classList.remove("is-hidden");
    document.body.classList.add("no-scroll");
  };

  const closeModal = (e) => {
    closeBtn.removeEventListener("click", closeModal);
    backdrop.removeEventListener("click", (e) => {
      if (e.target === backdrop) closeModal();
    });
    document.removeEventListener("keydown", (e) => {
      if (e.code === "Escape") closeModal();
    });

    openBtn.addEventListener("click", openModal);

    backdrop.classList.add("is-hidden");
    document.body.classList.remove("no-scroll");
  };

  openBtn.addEventListener("click", openModal);
};

handleModal();