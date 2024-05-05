document.addEventListener("DOMContentLoaded", () => {
  // Seleccion de elementos del DOM
  const toggleButton = document.querySelector(".navbar__toggle-btn");
  const mobileMenu = document.querySelector(".navbar__mobile-menu");

  // Si el menú móvil está oculto ('none' o vacío), lo muestra cambiando a 'flex'.
  // Si el menú móvil ya está visible ('flex'), lo oculta cambiando a 'none'.
  const toggleMenu = () => {
    mobileMenu.style.display =
      mobileMenu.style.display === "none" || mobileMenu.style.display === ""
        ? "flex"
        : "none";
  };

  // ocultar la lista desplegable
  const hideMenuOnResize = () => {
    mobileMenu.style.display = "none";
  };

  // event listeners
  toggleButton.addEventListener("click", toggleMenu);
  window.addEventListener("resize", hideMenuOnResize);
  window.addEventListener("load", hideMenuOnResize);
});
