import React from "react";
import ReactMarkdown from "react-markdown";
import PostHeader from "./postHeader";
import classes from './postContent.module.css'
import {Prism as SyntaHighlighter} from 'react-syntax-highlighter';
import { atomDark} from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Image from "next/image";

const DUMMY_POST={
    slug: "getting-started-with-next.js",
    title: "Getting started with Next.js",
    image: "nextjs.png",
    content: '# this is a first post' ,
    date: "2022-02-10",
  };

const PostContent = (props) => {
    const imagePath = `/images/${props.post.image}`
     const custom = {
    //   image(image){
    //         return <Image src={`/images/${image.src}`} alt={image.alt} width={600} height={300}/>
    //  }
      paragraph(paragraph){
        const {node} = paragraph;
        if(node.children[0].type === 'image'){
          const image = node.children[0]
          return <div className={classes.image}>
            <Image src={`/images/${image.src}`} alt={image.alt} width={600} height={300}/>
          </div>
        }
        return <p>{paragraph.children}</p>
      },
      code(code){
          const {language,value}= code
            return <SyntaHighlighter style={atomDark} language={'javascript'} children={value} />
      }
    }
  return (
    <article className={classes.content}>
      <PostHeader title={props.post.title} image={imagePath} />
      <ReactMarkdown renderers={{...{custom},...ReactMarkdown.renderers}} >{props.post.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
