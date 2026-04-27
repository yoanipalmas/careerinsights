import { BLOG_POSTS } from "../data/blogPosts";
export type { BlogPost } from "../data/blogPosts";

export async function getBlogPosts() {
  return BLOG_POSTS.filter((p) => p.published !== false);
}
