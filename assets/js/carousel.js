//Init and setup the carrousel

export const setupCarousel = () => {
  const track = document.querySelector(".carousel-track");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  const items = document.querySelectorAll(".carousel-item");
  const totalItems = items.length;

  let currentIndex = 0;

  function updateCarousel() {
    const translateX = -currentIndex * 100;
    track.style.transform = `translateX(${translateX}%)`;
  }

  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
  });

  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
  });
};