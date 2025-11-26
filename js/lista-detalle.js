
document.querySelectorAll(".nav-item").forEach((item) => {
  item.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href.startsWith("#")) {
      e.preventDefault();
      const section = href.replace("#", "");
      console.log(`Navegando a sección: ${section}`);
    }
  });
});

window.addEventListener("load", function () {
  const cards = document.querySelectorAll(".raza-card");
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, 50 * (index + 1));
  });
});

let ticking = false;

window.addEventListener("scroll", function () {
  if (!ticking) {
    window.requestAnimationFrame(function () {
      const cards = document.querySelectorAll(".raza-card");
      const scrolled = window.pageYOffset;

      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const offset = rect.top + scrolled;
        const yPos = -(scrolled - offset) * 0.05;

        if (rect.top < window.innerHeight && rect.bottom > 0) {
          card.style.transform = `translateY(${yPos}px)`;
        }
      });

      ticking = false;
    });

    ticking = true;
  }
});

const razaCards = document.querySelectorAll(".raza-card");
razaCards.forEach((card) => {
  const image = card.querySelector(".raza-image img");

  card.addEventListener("mouseenter", function () {
    if (image) {
      image.style.transform = "scale(1.08)";
    }
  });

  card.addEventListener("mouseleave", function () {
    if (image) {
      image.style.transform = "scale(1)";
    }
  });
});

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

razaCards.forEach((card) => {
  observer.observe(card);
});

const descripciones = document.querySelectorAll(".raza-descripcion");
descripciones.forEach((desc) => {
  desc.addEventListener("mouseenter", function () {
    this.style.backgroundColor = "rgba(245, 166, 35, 0.05)";
    this.style.transition = "background-color 0.3s ease";
  });

  desc.addEventListener("mouseleave", function () {
    this.style.backgroundColor = "transparent";
  });
});

console.log("Página de detalle de razas cargada");
