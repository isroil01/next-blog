import React from 'react'
import classes from './featured.module.css'
import PostGrid from '../posts/Post-grid'

const Featured = (props) => {
  return (
    <section className={classes.latest}>
        <h2>Featured Post</h2>
         <PostGrid posts={props.posts}/>

    </section>
  )
}

export default Featured