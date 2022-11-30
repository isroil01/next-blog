import React from "react";
import AllPost from "../../components/posts/AllPost";
import { GetAllPosts } from "../../lib/post-util";



const MainAllPost = (props) => {
  return <AllPost posts={props.data} />;
};

export function getStaticProps(){
   const allPosts = GetAllPosts();

   return {
    props: {
      data: allPosts
    }
   }
}

export default MainAllPost;
