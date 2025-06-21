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
