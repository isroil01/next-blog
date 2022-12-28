import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postDir = path.join(process.cwd(), "data");
export function getPostsfile(){
  return fs.readdirSync(postDir);
}

export function GetPostData(fileName) {
  const postSlug = fileName.replace(/\.md$/, "");
  const filePath = path.join(postDir, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

export const GetAllPosts = () => {
  const dataFile = getPostsfile()

  const allPost = dataFile.map((postFile) => {
    return GetPostData(postFile);
  });
  const sortedPost = allPost.sort((a, b) => (a.date > b.date ? -1 : 1));

  return sortedPost;
};

export function getFeaturedPost (){
    const allPosts = GetAllPosts();

    const featuredPost = allPosts.filter(post => post.isFeatured);
    return featuredPost;
}