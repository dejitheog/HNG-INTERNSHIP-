// Display current time in milliseconds
function updateTime() {
  const timeEl = document.getElementById("user-time");
  if (timeEl) { // 
    timeEl.textContent = Date.now();
  }
}

updateTime();
setInterval(updateTime, 1000);




// ====== CONTACT FORM VALIDATION (Stage 1) ======
document.addEventListener("DOMContentLoaded", () => {
  console.log("JS loaded");

  const form = document.getElementById("contactForm");
  if (!form) return; // stop here if not on contact page

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const subjectInput = document.getElementById("subject");
  const messageInput = document.getElementById("message");

  const errorName = document.getElementById("error-name");
  const errorEmail = document.getElementById("error-email");
  const errorSubject = document.getElementById("error-subject");
  const errorMessage = document.getElementById("error-message");
  const successMessage = document.getElementById("success-message");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // reset previous errors
    errorName.textContent = "";
    errorEmail.textContent = "";
    errorSubject.textContent = "";
    errorMessage.textContent = "";
    successMessage.style.display = "none";

    let isValid = true;

    // Name validation
    if (nameInput.value.trim() === "") {
      errorName.textContent = "Full name is required.";
      isValid = false;
    }

    // Email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (emailInput.value.trim() === "") {
      errorEmail.textContent = "Email is required.";
      isValid = false;
    } else if (!emailPattern.test(emailInput.value.trim())) {
      errorEmail.textContent = "Please enter a valid email (e.g. name@example.com).";
      isValid = false;
    }

    // Subject validation
    if (subjectInput.value.trim() === "") {
      errorSubject.textContent = "Subject is required.";
      isValid = false;
    }

    // Message validation
    if (messageInput.value.trim().length < 10) {
      errorMessage.textContent = "Message must be at least 10 characters.";
      isValid = false;
    }

    // If all fields are valid
    if (isValid) {
      successMessage.textContent = "✅ Your message has been successfully sent!";
      successMessage.style.display = "block";
      form.reset();
    }
  });
});


