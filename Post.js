// Post.js
const posts = [
  {
    title: "Post 1",
    thumbnail: "https://via.placeholder.com/150",
    description: "This is the description for post 1.",
    link: "https://example.com/post1"
  },
  {
    title: "Post 2",
    thumbnail: "https://via.placeholder.com/150",
    description: "This is the description for post 2.",
    link: "https://example.com/post2"
  },
  // ... add 23 more posts to have 25 total
];

// For demo, fill automatically if fewer than 25
while (posts.length < 25) {
  posts.push({
    title: `Post ${posts.length + 1}`,
    thumbnail: "https://via.placeholder.com/150",
    description: `Description for post ${posts.length + 1}`,
    link: `https://example.com/post${posts.length + 1}`
  });
}
