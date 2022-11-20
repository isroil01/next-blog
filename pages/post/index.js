import React from "react";
import AllPost from "../../components/posts/AllPost";

const DUMMY_DATA = [
  {
    slug: "getting-started-with-next.js",
    title: "Getting started with Next.js",
    image: "nextjs.png",
    excerpt:
      "Next.js is s React framework- it makes building fullstack react app",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-next.js2",
    title: "Getting started with Next.js",
    image: "nextjs2.png",
    excerpt:
      "Next.js is s React framework- it makes building fullstack react app",
    date: "2022-02-12",
  },
  {
    slug: "getting-started-with-next.js3",
    title: "Getting started with Next.js",
    image: "nextjs.png",
    excerpt:
      "Next.js is s React framework- it makes building fullstack react app",
    date: "2022-02-11",
  },
  {
    slug: "getting-started-with-next.js4",
    title: "Getting started with Next.js",
    image: "nextjs2.png",
    excerpt:
      "Next.js is s React framework- it makes building fullstack react app",
    date: "2022-02-01",
  },
];

const MainAllPost = () => {
  return <AllPost posts={DUMMY_DATA} />;
};

export default MainAllPost;
