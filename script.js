// script.js

const container = document.getElementById('postGrid');

function createPostElement(post) {
  const postEl = document.createElement('div');
  postEl.classList.add('post');

  postEl.innerHTML = `
    <a href="${post.link}" target="_blank">
      <img src="${post.thumbnail}" alt="${post.title}" class="thumbnail" />
    </a>
    <h3>${post.title}</h3>
    <p>${post.description}</p>
    <a href="${post.link}" target="_blank" class="read-more">Read More</a>
  `;

  return postEl;
}

// Render posts
posts.forEach(post => {
  container.appendChild(createPostElement(post));
});
