import React from "react";
import Link from "next/link";
import classes from "./postItem.module.css";
import Image from "next/image";

const PostItem = ({ post }) => {
  const { title, image, excerpt, date, slug } = post;
  const formatData = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const imagePath = `/images/${image}`;
  const linkPayt = `/post/${slug}`;
  return (
    <li className={classes.post}>
      <Link href={linkPayt}>
        <div className={classes.image}>
          <Image
            src={imagePath}
            alt={title}
            width={300}
            height={200}
            layout="responsive"
          />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <time>{formatData} </time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
};

export default PostItem;
