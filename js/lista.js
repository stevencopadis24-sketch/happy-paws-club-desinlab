
document.querySelectorAll(".nav-item").forEach((item) => {
  item.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href.startsWith("#") && href !== "#lista") {
      e.preventDefault();
      const section = href.replace("#", "");
      console.log(`Navegando a sección: ${section}`);
    }
  });
});

window.addEventListener("load", function () {
  const sections = document.querySelectorAll(".pet-section");
  sections.forEach((section, index) => {
    setTimeout(() => {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }, 200 * (index + 1));
  });
});

const petContainers = document.querySelectorAll(".pet-image-container");
petContainers.forEach((container) => {
  container.addEventListener("mouseenter", function () {
    const overlay = this.querySelector(".pet-overlay");
    const title = this.querySelector(".pet-title");

    overlay.style.background =
      "linear-gradient(to top, rgba(245, 166, 35, 0.9) 0%, rgba(245, 166, 35, 0.6) 50%, transparent 100%)";
    title.style.transform = "translateY(-5px)";
  });

  container.addEventListener("mouseleave", function () {
    const overlay = this.querySelector(".pet-overlay");
    const title = this.querySelector(".pet-title");

    overlay.style.background =
      "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 50%, transparent 100%)";
    title.style.transform = "translateY(0)";
  });
});

petContainers.forEach((container) => {
  container.addEventListener("click", function () {
    this.style.transform = "scale(0.98)";
    setTimeout(() => {
      this.style.transform = "";
    }, 150);
  });
});

console.log("Lista de mascotas cargada");
