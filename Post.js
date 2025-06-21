// Post.js
const posts = [
  {
    title: "Post 1",
    thumbnail: "https://scontent.fpnh16-1.fna.fbcdn.net/v/t15.5256-10/502609338_1437098030777514_5395470464142912512_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=1&ccb=1-7&_nc_sid=1bf86e&_nc_ohc=oyeX6Awquo8Q7kNvwGdZBoQ&_nc_oc=AdnqlLb7LLtKinIvGc0bMwR5EF7G0shKN9jSaa_Hvr02MrGBno0ce53YKHSGwUTGCZY&_nc_zt=23&_nc_ht=scontent.fpnh16-1.fna&_nc_gid=sbIOeVKwnDy-Dr7XWUzZQg&oh=00_AfMrU-SpD3RaQJjpuKPkEfaGfhVR_ZtJj4upUHJH1k5dFQ&oe=685C3100",
    description: "星星：为什么第一口不给我？#独臂猴星星 #动物的迷惑行为 #峨眉山的猴子 #人与动物和谐共处 #猴子成精",
    link: "https://www.facebook.com/reel/1299286924860968"
  },
  {
    title: "Post 2",
    thumbnail: "https://scontent.fpnh16-1.fna.fbcdn.net/v/t15.5256-10/502609338_1437098030777514_5395470464142912512_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=1&ccb=1-7&_nc_sid=1bf86e&_nc_ohc=oyeX6Awquo8Q7kNvwGdZBoQ&_nc_oc=AdnqlLb7LLtKinIvGc0bMwR5EF7G0shKN9jSaa_Hvr02MrGBno0ce53YKHSGwUTGCZY&_nc_zt=23&_nc_ht=scontent.fpnh16-1.fna&_nc_gid=sbIOeVKwnDy-Dr7XWUzZQg&oh=00_AfMrU-SpD3RaQJjpuKPkEfaGfhVR_ZtJj4upUHJH1k5dFQ&oe=685C3100",
    description: "星星：空手来的？亏我准备柴火准备起锅招待你#动物的迷惑行为 #峨眉山的猴子 #独臂猴星星 #人与动物和谐共处 #猴子🐒",
    link: "https://www.facebook.com/reel/9405140079587531"
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
