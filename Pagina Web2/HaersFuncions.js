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

// scroll de #mainNav

window.addEventListener('DOMContentLoaded', event => {

  // Navbar shrink function
  var navbarShrink = function () {
      const navbarCollapsible = document.body.querySelector('#mainNav');
      if (!navbarCollapsible) {
          return;
      }
      if (window.scrollY === 0) {
          navbarCollapsible.classList.remove('navbar-shrink')
      } else {
          navbarCollapsible.classList.add('navbar-shrink')
      }

  };

  // Shrink the navbar 
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener('scroll', navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector('#mainNav');
  if (mainNav) {
      new bootstrap.ScrollSpy(document.body, {
          target: '#mainNav',
          rootMargin: '0px 0px -40%',
      });
  };

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector('.navbar-toggler');
  const responsiveNavItems = [].slice.call(
      document.querySelectorAll('#navbarResponsive .nav-link')
  );
  responsiveNavItems.map(function (responsiveNavItem) {
      responsiveNavItem.addEventListener('click', () => {
          if (window.getComputedStyle(navbarToggler).display !== 'none') {
              navbarToggler.click();
          }
      });
  });

});