let images = [];
let currentIndex = 0;

const imageElement = document.getElementById("carouselImage");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

fetch('data.json')
  .then(res => res.json())
  .then(data => {
    images = data;
    showImage(currentIndex);
  });

function showImage(index) {
  if (images.length > 0) {
    imageElement.src = images[index].src;
  }
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});

