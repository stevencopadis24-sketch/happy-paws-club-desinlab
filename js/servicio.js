
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = "flex";
  document.body.style.overflow = "hidden"; 
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

document.getElementById("banoBtn").addEventListener("click", function () {
  console.log("Baño y cuidados clickeado");
  openModal("modalBano");
});

document.getElementById("estadiaBtn").addEventListener("click", function () {
  console.log("Estadía clickeado");
  openModal("modalEstadia");
});

document
  .getElementById("promocionesBtn")
  .addEventListener("click", function () {
    console.log("Promociones clickeado");
    openModal("modalPromociones");
  });

document.querySelectorAll(".close-modal").forEach((closeBtn) => {
  closeBtn.addEventListener("click", function () {
    const modalId = this.getAttribute("data-modal");
    closeModal(modalId);
  });
});

window.addEventListener("click", function (e) {
  if (e.target.classList.contains("modal")) {
    closeModal(e.target.id);
  }
});

document.querySelectorAll(".modal-content").forEach((content) => {
  content.addEventListener("click", function (e) {
    e.stopPropagation();
  });
});

document.getElementById("formBano").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("¡Cita registrada exitosamente!\n\nRecibirás una confirmación pronto.");
  closeModal("modalBano");
  this.reset();
});

document.getElementById("formEstadia").addEventListener("submit", function (e) {
  e.preventDefault();
  alert(
    "¡Reserva registrada exitosamente!\n\nRecibirás una confirmación pronto."
  );
  closeModal("modalEstadia");
  this.reset();
});

document
  .getElementById("formPromociones")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert(
      "¡Solicitud enviada exitosamente!\n\nTe contactaremos para confirmar tu promoción."
    );
    closeModal("modalPromociones");
    this.reset();
  });

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

const serviceButtons = document.querySelectorAll(".service-btn");
serviceButtons.forEach((button) => {
  button.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-5px) scale(1.05)";
  });

  button.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});

window.addEventListener("load", function () {
  const buttons = document.querySelectorAll(".service-btn");
  buttons.forEach((btn, index) => {
    setTimeout(() => {
      btn.style.opacity = "1";
      btn.style.transform = "translateY(0)";
    }, 100 * (index + 1));
  });
});
