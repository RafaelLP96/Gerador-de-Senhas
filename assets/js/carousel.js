//Init and setup the carrousel

export const setupCarousel = () => {
  const track = document.querySelector(".carousel-track");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  const items = document.querySelectorAll(".carousel-item");
  const totalItems = items.length;
  let intervalId = 0;

  let currentIndex = 0;

  function updateCarousel() {
    const translateX = -currentIndex * 100;
    track.style.transform = `translateX(${translateX}%)`;
  }

  function startCounter() {
    clearInterval(intervalId); 
    intervalId = setInterval(() => {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    }, 7000); 
}

  nextButton.addEventListener("click", () => {
    
    currentIndex = (currentIndex + 1) % totalItems;
    startCounter();
    updateCarousel();
  });

  prevButton.addEventListener("click", () => {
    
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    startCounter();
    updateCarousel();
  });

  startCounter();
};
