import { Blog } from "@/types/blog";
import { blogs } from "@/data/blogs";

export function getBlogs(): Blog[] {
  return blogs;
}
