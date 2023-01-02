import React from 'react'
import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react';

import styles from './Header.module.css';

function Header() {
  const [scrolling, setScrolling] = useState(false);

  const meranieScroll = () => {
    if(window.scrollY > 100) {
      setScrolling(true);
    }
    else {
      setScrolling(false);
    }
  }

  useEffect(() => {
  window.addEventListener('scroll', meranieScroll);
  return () => window.removeEventListener('scroll', meranieScroll);
  }, []);
  
  return (
      <div className={`${styles.navbar} ${scrolling && "background__black"}`}>
        <Link to={`/`}>
          <img
            className={styles.logo}
            src="https://pngimg.com/uploads/netflix/netflix_PNG25.png"
            alt="Netflix logo"
          />
        </Link>
        <Link to={`/`}>
          <img
            className={styles.avatar}
            src="https://th.bing.com/th/id/OIP.mRVWwlJuuX-OdFt5NjyGYQHaHa?w=152&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt="Avatar"
          />
        </Link>
      </div>
  );
}

export default Header