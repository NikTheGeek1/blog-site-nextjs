import matter from "gray-matter";
import fs from "fs";
import path from "path";

const postsDirectory = path.join(process.cwd(), "posts");

export function getPostsData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, "");
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    slug: postSlug,
    ...data,
    content,
  };
}

export function getAllPosts() {
  const postsFiles = fs.readdirSync(postsDirectory);

  const allPosts = postsFiles.map((postFile) => {
    return getPostsData(postFile);
  });

  return allPosts.sort((postA, postB) => (postA.date > postB.date ? -1 : 1));
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  return allPosts.filter((post) => post.isFeatured);
}

