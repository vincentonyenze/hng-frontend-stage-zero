// Update the timestamp with current time in milliseconds
function updateTime() {
  const timeElement = document.getElementById("currentTime");
  if (timeElement) {
    const currentTime = Date.now();
    timeElement.textContent = `${currentTime}`;
  }
}

// Initial time update
updateTime();

// Optional: Update time every second
setInterval(updateTime, 1000);

// Mobile Navigation Functionality
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const navLinks = document.querySelector(".nav-links");

  if (mobileMenuBtn && navLinks) {
    // Toggle mobile menu
    mobileMenuBtn.addEventListener("click", function () {
      const isOpen = navLinks.classList.contains("open");

      if (isOpen) {
        // Close menu
        navLinks.classList.remove("open");
        mobileMenuBtn.classList.remove("open");
        mobileMenuBtn.setAttribute("aria-expanded", "false");
      } else {
        // Open menu
        navLinks.classList.add("open");
        mobileMenuBtn.classList.add("open");
        mobileMenuBtn.setAttribute("aria-expanded", "true");
      }
    });

    // Close menu when clicking on a link
    const navLinkElements = navLinks.querySelectorAll(".nav-link");
    navLinkElements.forEach((link) => {
      link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        mobileMenuBtn.classList.remove("open");
        mobileMenuBtn.setAttribute("aria-expanded", "false");
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
      if (
        !mobileMenuBtn.contains(event.target) &&
        !navLinks.contains(event.target)
      ) {
        navLinks.classList.remove("open");
        mobileMenuBtn.classList.remove("open");
        mobileMenuBtn.setAttribute("aria-expanded", "false");
      }
    });

    // Close menu on escape key
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && navLinks.classList.contains("open")) {
        navLinks.classList.remove("open");
        mobileMenuBtn.classList.remove("open");
        mobileMenuBtn.setAttribute("aria-expanded", "false");
        mobileMenuBtn.focus();
      }
    });

    // Handle window resize
    window.addEventListener("resize", function () {
      if (window.innerWidth > 767) {
        navLinks.classList.remove("open");
        mobileMenuBtn.classList.remove("open");
        mobileMenuBtn.setAttribute("aria-expanded", "false");
      }
    });
  }
});
