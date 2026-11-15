/* NAME: HUDA TALAL
   ROLL NO: 26I-3239
   SECTION: SE-E */

document.addEventListener("DOMContentLoaded", () => {
  // Pet Care Tabs
  const careTabBtns = document.querySelectorAll(".care-tab-btn");
  const carePanels = document.querySelectorAll(".care-panel");

  careTabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      careTabBtns.forEach((b) => b.classList.remove("active"));
      carePanels.forEach((p) => p.classList.remove("active"));

      btn.classList.add("active");
      const targetId = "care-" + btn.getAttribute("data-pet");
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add("active");
      }
    });
  });

  // Readiness Checklist Progress Bar
  const checkboxes = document.querySelectorAll(".ready-check");
  const progressBar = document.getElementById("checklistProgress");
  const progressText = document.getElementById("progressText");

  checkboxes.forEach((box) => {
    box.addEventListener("change", () => {
      const total = checkboxes.length;
      const checked = document.querySelectorAll(".ready-check:checked").length;
      const percent = (checked / total) * 100;

      progressBar.style.width = percent + "%";
      progressText.textContent = `${checked} of ${total} Ready`;
    });
  });
});