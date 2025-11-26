
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
  const cards = document.querySelectorAll(".comment-card");


  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  cards.forEach((card) => {
    observer.observe(card);
  });
});

const commentCards = document.querySelectorAll(".comment-card");
commentCards.forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transition = "all 0.3s ease";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transition = "all 0.3s ease";
  });
});

const ratings = document.querySelectorAll(".rating");
ratings.forEach((rating) => {
  const stars = rating.querySelectorAll("i");

  stars.forEach((star, index) => {
    star.addEventListener("mouseenter", function () {
      stars.forEach((s, i) => {
        if (i <= index) {
          s.style.transform = "scale(1.2)";
          s.style.transition = "transform 0.2s ease";
        }
      });
    });

    star.addEventListener("mouseleave", function () {
      stars.forEach((s) => {
        s.style.transform = "scale(1)";
      });
    });
  });
});
