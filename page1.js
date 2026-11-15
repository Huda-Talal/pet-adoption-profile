/* NAME: HUDA TALAL
   ROLL NO: 26I-3239
   SECTION: SE-E */

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const categoryButtons = document.querySelectorAll(".cat-btn");
  const petCards = document.querySelectorAll(".pet-card");
  const noResultsMsg = document.getElementById("noResultsMsg");

  let selectedCategory = "all";

  // Filter pets by category and search text
  function filterPets() {
    const query = searchInput.value.toLowerCase().trim();
    let visibleCount = 0;

    petCards.forEach((card) => {
      const category = card.getAttribute("data-category");
      const name = card.getAttribute("data-name").toLowerCase();
      const breed = card.getAttribute("data-breed").toLowerCase();

      const matchesCategory = selectedCategory === "all" || category === selectedCategory;
      const matchesSearch = name.includes(query) || breed.includes(query);

      if (matchesCategory && matchesSearch) {
        card.style.display = "flex";
        visibleCount++;
      } else {
        card.style.display = "none";
      }
    });

    noResultsMsg.style.display = visibleCount === 0 ? "block" : "none";
  }

  // Category button clicks
  categoryButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      categoryButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      selectedCategory = btn.getAttribute("data-category");
      filterPets();
    });
  });

  // Search input typing
  searchInput.addEventListener("input", filterPets);

  // Pet Details Modal Logic
  const modal = document.getElementById("petModal");
  const closeModal = document.getElementById("closeModal");
  const viewButtons = document.querySelectorAll(".view-details-btn");

  viewButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".pet-card");
      document.getElementById("modalImg").src = card.querySelector("img").src;
      document.getElementById("modalName").textContent = card.getAttribute("data-name");
      document.getElementById("modalBreed").textContent = card.getAttribute("data-breed");
      document.getElementById("modalAge").textContent = card.getAttribute("data-age");
      document.getElementById("modalGender").textContent = card.getAttribute("data-gender");
      document.getElementById("modalDesc").textContent = card.getAttribute("data-desc");
      modal.style.display = "flex";
    });
  });

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
