// ===== Hamburgermeny =====
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("header nav");

  if (menuToggle) {
    menuToggle.addEventListener("click", function () {
      nav.classList.toggle("active");
    });
  }

  // ===== Hero Slider (start.html) =====
  const heroSlider = document.querySelector("#heroSlider .slides");
  const heroImages = heroSlider ? heroSlider.querySelectorAll("img") : [];
  let heroIndex = 0;

  function showHeroSlide(index) {
    heroSlider.style.transform = `translateX(-${index * 100}%)`;
  }

  const heroPrev = document.querySelector("#heroSlider .prev");
  const heroNext = document.querySelector("#heroSlider .next");

  if (heroPrev && heroNext && heroImages.length > 0) {
    heroPrev.addEventListener("click", () => {
      heroIndex = (heroIndex - 1 + heroImages.length) % heroImages.length;
      showHeroSlide(heroIndex);
    });

    heroNext.addEventListener("click", () => {
      heroIndex = (heroIndex + 1) % heroImages.length;
      showHeroSlide(heroIndex);
    });
  }

  // ===== Bildalbum (info.html) =====
  let albumIndex = 0;
  const albumSlides = document.querySelectorAll(".album-slide");

  function showAlbumSlide(n) {
    albumSlides.forEach((slide, i) => {
      slide.classList.toggle("active", i === n);
    });
  }

  window.changeSlide = function (n) {
    albumIndex = (albumIndex + n + albumSlides.length) % albumSlides.length;
    showAlbumSlide(albumIndex);
  };

  if (albumSlides.length > 0) {
    showAlbumSlide(albumIndex);
  }
});
