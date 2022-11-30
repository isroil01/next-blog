import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postDir = path.join(process.cwd(), "data");

function GetPostData(fileName) {
  const filePath = path.join(postDir, fileName);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const postSlug = fileName.replace(/\.md$/, "");
  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

export const GetAllPosts = () => {
  const dataFile = fs.readdirSync(postDir);

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