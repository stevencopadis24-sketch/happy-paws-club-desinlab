
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

document
  .getElementById("crearUsuarioBtn")
  .addEventListener("click", function () {
    console.log("Crear usuario clickeado");
    openModal("modalCrearUsuario");
  });

document
  .getElementById("ingresarUsuarioBtn")
  .addEventListener("click", function () {
    console.log("Ingresar usuario clickeado");
    openModal("modalIngresarUsuario");
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

document
  .getElementById("formCrearUsuario")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const passwords = this.querySelectorAll('input[type="password"]');
    if (passwords[0].value !== passwords[1].value) {
      alert(
        "Las contraseñas no coinciden. Por favor, verifica e intenta nuevamente."
      );
      return;
    }


    const formData = new FormData(this);
    const nombre = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;

    console.log("Usuario creado:", { nombre, email });

    alert(
      `¡Cuenta creada exitosamente!\n\nBienvenido/a ${nombre}\n\nTe hemos enviado un correo de confirmación a:\n${email}`
    );

    closeModal("modalCrearUsuario");
    this.reset();
  });

document
  .getElementById("formIngresarUsuario")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const email = this.querySelector('input[type="email"]').value;
    const password = this.querySelector('input[type="password"]').value;
    const remember = this.querySelector('input[type="checkbox"]').checked;

    console.log("Usuario ingresando:", { email, remember });

    alert(`¡Bienvenido/a de nuevo!\n\nIniciando sesión como:\n${email}`);

    closeModal("modalIngresarUsuario");
    this.reset();
  });

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

const userButtons = document.querySelectorAll(".user-btn");
userButtons.forEach((button) => {
  button.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-5px) scale(1.05)";
  });

  button.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});

window.addEventListener("load", function () {
  const buttons = document.querySelectorAll(".user-btn");
  buttons.forEach((btn, index) => {
    setTimeout(() => {
      btn.style.opacity = "1";
      btn.style.transform = "translateY(0)";
    }, 100 * (index + 1));
  });
});

document.querySelectorAll('input[type="password"]').forEach((input) => {
  input.addEventListener("focus", function () {
    this.style.borderColor = "#f5a623";
  });

  input.addEventListener("blur", function () {
    this.style.borderColor = "#e0e0e0";
  });
});
