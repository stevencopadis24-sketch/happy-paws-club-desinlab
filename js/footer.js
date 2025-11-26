
const faqModals = {
  vacunas: "modalVacunas",
  supervision: "modalSupervision",
  cita: "modalCita",
};

function openFaqModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }
}

function closeFaqModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
}

document.querySelectorAll(".faq-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const faqType = this.getAttribute("data-faq");
    const modalId = faqModals[faqType];
    if (modalId) {
      openFaqModal(modalId);
    }
  });
});

document.querySelectorAll(".close-faq-modal").forEach((closeBtn) => {
  closeBtn.addEventListener("click", function () {
    const modalId = this.getAttribute("data-modal");
    closeFaqModal(modalId);
  });
});

window.addEventListener("click", function (e) {
  if (e.target.classList.contains("faq-modal")) {
    closeFaqModal(e.target.id);
  }
});

document.querySelectorAll(".faq-modal-content").forEach((content) => {
  content.addEventListener("click", function (e) {
    e.stopPropagation();
  });
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    document.querySelectorAll(".faq-modal").forEach((modal) => {
      if (modal.style.display === "flex") {
        closeFaqModal(modal.id);
      }
    });
  }
});

console.log("Footer FAQ functionality loaded");
