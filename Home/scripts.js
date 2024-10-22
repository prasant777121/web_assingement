document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Message sent successfully!");
  });

document.addEventListener("DOMContentLoaded", () => {
  // Team Carousel Functionality
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  const teamCards = document.querySelectorAll(".team-card");
  let currentIndex = 0;

  function showTeamCard(index) {
    // Hide all cards
    teamCards.forEach((card, i) => {
      card.style.display = i === index ? "block" : "none";
    });
  }

  // Show the first card initially
  showTeamCard(currentIndex);

  prevButton.addEventListener("click", () => {
    currentIndex = currentIndex === 0 ? teamCards.length - 1 : currentIndex - 1;
    showTeamCard(currentIndex);
  });

  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % teamCards.length;
    showTeamCard(currentIndex);
  });

  // "See detail" Button Alert
  const detailButton = document.querySelector(".detail-button");
  detailButton.addEventListener("click", () => {
    alert("More details coming soon!");
    // You can also navigate to another page:
    // window.location.href = "details-page.html";
  });
});
document.addEventListener("DOMContentLoaded", () => {
  // "See detail" Button Alert
  const detailButton = document.querySelector(".detail-button");
  detailButton.addEventListener("click", () => {
    alert("Button clicked! More details coming soon!");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Retrieve form data
    const formData = new FormData(contactForm);
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");

    // Basic form validation
    if (!firstName || !lastName || !email || !phone || !message) {
      alert("Please fill in all the fields.");
      return;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!validatePhone(phone)) {
      alert("Please enter a valid phone number.");
      return;
    }

    // Here you can handle the form submission, e.g., sending the data to a server
    alert("Message sent successfully!");

    // Optionally, reset the form
    contactForm.reset();
  });

  function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  function validatePhone(phone) {
    const phonePattern = /^\+?\d{10,15}$/;
    return phonePattern.test(phone);
  }
});
