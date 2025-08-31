document.addEventListener("DOMContentLoaded", () => {
  // Buttons
  const cultureBtn = document.getElementById("sighTips_containerBox1");
  const hikeBtn = document.getElementById("sighTips_containerBox2");

  // Tracks
  const cultureTrack = document.getElementById("cultureTrack");
  const hikeTrack = document.getElementById("hikeTrack");

  // Put them in arrays so we can loop through
  const buttons = [cultureBtn, hikeBtn];
  const tracks = [cultureTrack, hikeTrack];

  function activateTrack(selectedBtn, selectedTrack) {
    const isAlreadyActive =
      selectedTrack.style.display === "block" &&
      selectedBtn.classList.contains("selected");

    // If the same button is clicked again → deselect
    if (isAlreadyActive) {
      selectedTrack.style.display = "none";
      selectedBtn.classList.remove("selected");
      return;
    }

    // Otherwise → hide all, then activate selected one
    tracks.forEach((track) => (track.style.display = "none"));
    buttons.forEach((btn) => btn.classList.remove("selected"));

    selectedTrack.style.display = "block";
    selectedBtn.classList.add("selected");

    // Smooth scroll into view
    selectedTrack.scrollIntoView({ behavior: "smooth" });
  }

  // Event listeners
  cultureBtn.addEventListener("click", () => {
    activateTrack(cultureBtn, cultureTrack);
  });

  hikeBtn.addEventListener("click", () => {
    activateTrack(hikeBtn, hikeTrack);
  });
});


// SLIDER //
const sliders = document.querySelectorAll(".slider");

sliders.forEach((slider) => {
  const slides = slider.querySelector(".slides");
  const images = slides.querySelectorAll("img");
  const prevBtn = slider.querySelector(".prev");
  const nextBtn = slider.querySelector(".next");

  let index = 0;

  function showSlide(i) {
    index = (i + images.length) % images.length; // loop around
    slides.style.transform = `translateX(${-index * 100}%)`;
  }

  prevBtn.addEventListener("click", () => {
    showSlide(index - 1);
  });

  nextBtn.addEventListener("click", () => {
    showSlide(index + 1);
  });
});
