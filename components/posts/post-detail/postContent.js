import React from "react";
import ReactMarkdown from "react-markdown";
import PostHeader from "./postHeader";
import classes from './postContent.module.css'

const DUMMY_POST={
    slug: "getting-started-with-next.js",
    title: "Getting started with Next.js",
    image: "nextjs.png",
    content: '# this is a first post' ,
    date: "2022-02-10",
  };

const PostContent = () => {
    const imagePath = `/images/${DUMMY_POST.image}`
  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
