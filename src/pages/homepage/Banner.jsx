import React from 'react'

import styles from './Banner.module.css';

export const Banner = () => {
  return (
    <div className={styles.banner__wrapper}>
      <div className={styles.content__wrapper}>
        <div className={styles.content}>
          <h2 className={styles.heading}>Heading</h2>
          <div className={styles.buttons__wrapper}>
            <button className={styles.button}>Button</button>
            <button className={styles.button}>Button</button>
          </div>
          <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
}
