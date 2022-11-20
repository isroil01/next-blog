import React from 'react';
import Image from 'next/image';
import classes from './hero.module.css';

const Hero = () => {
  return (
    <section className={classes.hero}>
        <div className={classes.image}>
            <Image src='/images/me.jpeg' alt='An image showing me'  width={300} height={300} />
        </div>
        <h1>Hi, I'm Isroiljon</h1>
        <p>I blog about web development - especially Front-end frameworks</p>
    </section>
  )
}

export default Hero