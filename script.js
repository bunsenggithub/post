const container = document.getElementById("postGrid");

function createPostElement(post) {
  const postDiv = document.createElement("div");
  postDiv.classList.add("post");

  postDiv.innerHTML = `
    <img src="${post.thumbnail}" alt="${post.title} thumbnail" />
    <h2>${post.title}</h2>
    <p>${post.description}</p>
    <a href="${post.link}" target="_blank" rel="noopener noreferrer">${post.link}</a>
  `;

  return postDiv;
}

function renderPosts() {
  posts.forEach(post => {
    const postEl = createPostElement(post);
    container.appendChild(postEl);
  });
}

renderPosts();

// Carosel
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


