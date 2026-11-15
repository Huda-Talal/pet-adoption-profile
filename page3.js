/* NAME: HUDA TALAL
   ROLL NO: 26I-3239
   SECTION: SE-E */

document.addEventListener("DOMContentLoaded", () => {
  const adoptionForm = document.getElementById("adoptionForm");
  const formContainer = document.getElementById("formContainer");
  const thankYouBox = document.getElementById("thankYouBox");
  const resetFormBtn = document.getElementById("resetFormBtn");

  // Handle Adoption Form Submission
  adoptionForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const selectedPet = document.getElementById("petSelect").value;

    // Populate personalized Thank You message
    document.getElementById("displayAdopterName").textContent = fullName;
    document.getElementById("displayPetName").textContent = selectedPet;
    document.getElementById("displayEmail").textContent = email;

    // Generate random reference code
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    document.getElementById("refCode").textContent = `#AH-${randomNum}`;

    // Switch view from form to Thank You message
    formContainer.style.display = "none";
    thankYouBox.style.display = "block";
  });

  // Allow submitting another adoption request
  resetFormBtn.addEventListener("click", () => {
    adoptionForm.reset();
    thankYouBox.style.display = "none";
    formContainer.style.display = "block";
  });
});