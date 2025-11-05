  const menu = document.querySelector(".navbar__menu");
  const dropdown = document.querySelector(".navbar__dropdown");

  menu.addEventListener("click", () => {
    dropdown.classList.toggle("active");
  });
