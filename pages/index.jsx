import React, { Fragment } from "react";
import Hero from "../components/Home/Hero.js";
import Featured from "../components/Home/Featured.js";
import { getFeaturedPost } from "../lib/post-util.js";



const HomePage = (props) => {
  return (
    <Fragment>
      <Hero />
      <Featured posts={props.posts} />
    </Fragment>
  );
};

export function getStaticProps(){
  const featuredPost = getFeaturedPost();

  return {
    props: {
      posts: featuredPost
    }
  }
}

export default HomePage;
