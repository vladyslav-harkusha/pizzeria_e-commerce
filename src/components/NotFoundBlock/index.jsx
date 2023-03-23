import React from 'react';

import styles from './NotFoundBlock.module.scss';

export const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>😕</span>
        <br />
        Nothing found
      </h1>
      <p className={styles.description}>
        Unfortunately there is no such page on our site
      </p>
    </div>
  );
};
