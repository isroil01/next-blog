import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import classes from './mainNav.module.css'

const MainNav = () => {
  return (
    <header className={classes.header}>
      <Link href='/'>
        <Logo />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/post">Post</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;
