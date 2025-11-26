
let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-slide");
const indicators = document.querySelectorAll(".indicator");
const totalSlides = slides.length;
const carousel1 = document.querySelector(
  ".carousel-container:not(.carousel-secondary)"
);

function showSlide(index) {
  if (index >= totalSlides) {
    index = 0;
  } else if (index < 0) {
    index = totalSlides - 1;
  }

  currentSlide = index;

  slides.forEach((slide, i) => {
    slide.classList.remove("active");
  });

  if (slides[currentSlide]) {
    slides[currentSlide].classList.add("active");
  }

  indicators.forEach((indicator, i) => {
    indicator.classList.remove("active");
  });

  if (indicators[currentSlide]) {
    indicators[currentSlide].classList.add("active");
  }
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    showSlide(index);
  });
});

const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

if (nextBtn) {
  nextBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    nextSlide();
  });
}

if (prevBtn) {
  prevBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    prevSlide();
  });
}

if (carousel1) {

  let isDragging = false;
  let startX = 0;
  let currentX = 0;
  let hasMoved = false;

  carousel1.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
  });

  carousel1.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    currentX = e.touches[0].clientX;
  });

  carousel1.addEventListener("touchend", (e) => {
    if (!isDragging) return;
    isDragging = false;

    const diff = startX - currentX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  });

  carousel1.addEventListener("mousedown", (e) => {
    startX = e.clientX;
    currentX = e.clientX;
    isDragging = true;
    hasMoved = false;
    carousel1.style.cursor = "grabbing";
  });

  carousel1.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    currentX = e.clientX;
    if (Math.abs(currentX - startX) > 5) {
      hasMoved = true;
    }
  });

  carousel1.addEventListener("mouseup", (e) => {
    if (!isDragging) return;
    isDragging = false;
    carousel1.style.cursor = "grab";

    const diff = startX - currentX;

    if (hasMoved && Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    else if (!hasMoved) {
      const rect = carousel1.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const carouselWidth = rect.width;

      if (clickX < carouselWidth / 2) {
        prevSlide();
      } else {
        nextSlide();
      }
    }
  });

  carousel1.addEventListener("mouseleave", () => {
    if (isDragging) {
      isDragging = false;
      carousel1.style.cursor = "grab";
    }
  });

  carousel1.style.cursor = "grab";
}

let currentSlide2 = 0;
const slides2 = document.querySelectorAll(".carousel-slide-2");
const indicators2 = document.querySelectorAll(".indicator-2");
const totalSlides2 = slides2.length;
const carouselSecondary = document.querySelector(".carousel-secondary");

console.log("Segundo carrusel - Total slides:", totalSlides2);

function showSlide2(index) {
  console.log("showSlide2 - antes index:", index, "current:", currentSlide2);

  if (index >= totalSlides2) {
    index = 0;
  } else if (index < 0) {
    index = totalSlides2 - 1;
  }

  currentSlide2 = index;
  console.log("showSlide2 - después current:", currentSlide2);

  slides2.forEach((slide, i) => {
    slide.classList.remove("active");
  });

  if (slides2[currentSlide2]) {
    slides2[currentSlide2].classList.add("active");
    console.log("Slide activado:", currentSlide2);
  }

  indicators2.forEach((indicator, i) => {
    indicator.classList.remove("active");
  });

  if (indicators2[currentSlide2]) {
    indicators2[currentSlide2].classList.add("active");
  }
}

function nextSlide2() {
  showSlide2(currentSlide2 + 1);
}

function prevSlide2() {
  showSlide2(currentSlide2 - 1);
}

indicators2.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    showSlide2(index);
  });
});

const nextBtn2 = document.querySelector(".next-btn-2");
const prevBtn2 = document.querySelector(".prev-btn-2");

if (nextBtn2) {
  nextBtn2.addEventListener("click", (e) => {
    e.stopPropagation();
    nextSlide2();
  });
}

if (prevBtn2) {
  prevBtn2.addEventListener("click", (e) => {
    e.stopPropagation();
    prevSlide2();
  });
}

if (carouselSecondary) {
  let isDragging2 = false;
  let startX2 = 0;
  let currentX2 = 0;
  let hasMoved2 = false;

  carouselSecondary.addEventListener("touchstart", (e) => {
    startX2 = e.touches[0].clientX;
    isDragging2 = true;
  });

  carouselSecondary.addEventListener("touchmove", (e) => {
    if (!isDragging2) return;
    currentX2 = e.touches[0].clientX;
  });

  carouselSecondary.addEventListener("touchend", (e) => {
    if (!isDragging2) return;
    isDragging2 = false;

    const diff = startX2 - currentX2;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide2();
      } else {
        prevSlide2();
      }
    }
  });

  carouselSecondary.addEventListener("mousedown", (e) => {
    startX2 = e.clientX;
    currentX2 = e.clientX;
    isDragging2 = true;
    hasMoved2 = false;
    carouselSecondary.style.cursor = "grabbing";
  });

  carouselSecondary.addEventListener("mousemove", (e) => {
    if (!isDragging2) return;
    currentX2 = e.clientX;
    if (Math.abs(currentX2 - startX2) > 5) {
      hasMoved2 = true;
    }
  });

  carouselSecondary.addEventListener("mouseup", (e) => {
    if (!isDragging2) return;
    isDragging2 = false;
    carouselSecondary.style.cursor = "grab";

    const diff = startX2 - currentX2;

    if (hasMoved2 && Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide2();
      } else {
        prevSlide2();
      }
    }
  
    else if (!hasMoved2) {
      const rect = carouselSecondary.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const carouselWidth = rect.width;

      if (clickX < carouselWidth / 2) {
        prevSlide2();
      } else {
        nextSlide2();
      }
    }
  });

  carouselSecondary.addEventListener("mouseleave", () => {
    if (isDragging2) {
      isDragging2 = false;
      carouselSecondary.style.cursor = "grab";
    }
  });

  carouselSecondary.style.cursor = "grab";
}

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    if (totalSlides > 0) prevSlide();
  } else if (e.key === "ArrowRight") {
    if (totalSlides > 0) nextSlide();
  }
});
const crearUsuarioBtn = document.getElementById("crearUsuario");
if (crearUsuarioBtn) {
  crearUsuarioBtn.addEventListener("click", function () {
    console.log("Crear usuario clickeado");
    alert('Función "Crear usuario" - Implementar formulario de registro');
  });
}

const ingresarUsuarioBtn = document.getElementById("ingresarUsuario");
if (ingresarUsuarioBtn) {
  ingresarUsuarioBtn.addEventListener("click", function () {
    console.log("Ingresar Usuario clickeado");
    alert('Función "Ingresar Usuario" - Implementar formulario de login');
  });
}

const backButton = document.querySelector(".back-button");
if (backButton) {
  backButton.addEventListener("click", function () {
    console.log("Botón atrás clickeado");
    window.history.back();
  });
}

document.querySelectorAll(".nav-item").forEach((item) => {
  item.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href.startsWith("#")) {
      e.preventDefault();
      const section = href.replace("#", "");
      console.log(`Navegando a sección: ${section}`);
      alert(`Navegando a: ${this.querySelector("span").textContent}`);
    }
  });
});

window.addEventListener("load", function () {
  document.body.style.opacity = "0";
  setTimeout(() => {
    document.body.style.transition = "opacity 0.5s";
    document.body.style.opacity = "1";
  }, 100);
});
const mainButtons = document.querySelectorAll(".main-button");
mainButtons.forEach((button) => {
  button.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-3px) scale(1.02)";
  });

  button.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});
