// Post.js
// Array of 25 post objects (5x5 = 25)

const posts = [
  {
    title: "Post 1",
    thumbnail: "https://via.placeholder.com/150?text=Thumb+1",
    description: "Description for post 1",
    link: "https://example.com/post1"
  },
  {
    title: "Post 2",
    thumbnail: "https://via.placeholder.com/150?text=Thumb+2",
    description: "Description for post 2",
    link: "https://example.com/post2"
  },
  // ... Add up to 25 posts manually
];

// For demo, you can generate 25 posts automatically like this:
for (let i = posts.length + 1; i <= 25; i++) {
  posts.push({
    title: `Post ${i}`,
    thumbnail: `https://via.placeholder.com/150?text=Thumb+${i}`,
    description: `Description for post ${i}`,
    link: `https://example.com/post${i}`
  });
}
