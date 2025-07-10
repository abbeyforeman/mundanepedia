      // Simple navigation functionality
      document.addEventListener("DOMContentLoaded", function () {
        const links = document.querySelectorAll('a[href^="#"]');

        links.forEach((link) => {
          link.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href").substring(1);

            if (targetId === "random") {
              // Get all article divs
              const articles = document.querySelectorAll(
                '[id]:not([id="main-content"]):not([id="featured-article"]):not([id="random"]):not([id="featured"]):not([id="recent"]):not([id="help"])'
              );

              // Select random article
              const randomArticle =
                articles[Math.floor(Math.random() * articles.length)];

              // Scroll to it
              if (randomArticle) {
                randomArticle.scrollIntoView({ behavior: "smooth" });
              }
            } else if (targetId === "featured") {
              document
                .getElementById("featured-article")
                .scrollIntoView({ behavior: "smooth" });
            } else {
              const targetElement = document.getElementById(targetId);
              if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
              }
            }
          });
        });
      });
