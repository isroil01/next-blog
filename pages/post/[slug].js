import React from "react";
import {GetPostData,  getPostsfile } from '../../lib/post-util';
import PostContent from "../../components/posts/post-detail/postContent";

const DetailedPage = (props) => {
  return <PostContent post={props.post} />;
};
export function getStaticProps(context){
  const {params} = context
  const {slug} = params
 const postData = GetPostData(slug);

 return {
  props: {
    post: postData
  },
  revalidate: 600
 }
}
export function getStaticPaths(){
const postFileName = getPostsfile();
const slug = postFileName.map(file=>file.replace(/\.md$/, ""))
  return{
    paths: slug.map(slug=>({params: {slug:slug}})),
    fallback: false
  }
}

export default DetailedPage;
