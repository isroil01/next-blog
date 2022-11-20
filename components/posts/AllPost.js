import React from 'react'
import classes from './allpost.module.css'
import PostGrid from './Post-grid'

const AllPost = (props) => {
    console.log(props.posts)
  return (
    <section className={classes.posts}>
        <h1>All Post</h1>
        <PostGrid posts={props.posts} />
    </section>
  )
}

export default AllPost