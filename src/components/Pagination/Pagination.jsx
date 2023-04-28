import React, { useCallback } from 'react';
import cn from 'classnames';

import styles from './Pagination.module.scss';

const getPages = (from, to) => {
  const pages = [];
  for (let n = from; n <= to; n += 1) {
    pages.push(n);
  }
  return pages;
};

export const Pagination = ({
  totalItems, perPage, currentPage, onChangePage,
}) => {
  const totalPages = Math.ceil(totalItems / perPage);

  const handlePrev = useCallback(() => {
    return currentPage !== 1
      && onChangePage((currentPage - 1));
  }, [currentPage]);

  const handleNext = useCallback(() => {
    return currentPage !== totalPages
      && onChangePage((currentPage + 1));
  }, [currentPage]);

  const pages = getPages(1, totalPages)

  return (
    <ul className={styles.pageList}>
      <li
        className={cn([styles.pageItem], { [styles.disabled]: currentPage === 1 })}
        onClick={handlePrev}
      >
        «
      </li>

      {pages.map(pageNumber => (
        <li
          className={cn([styles.pageItem], { [styles.active]: pageNumber === currentPage })}
          key={pageNumber}
          onClick={() => onChangePage(pageNumber)}
        >
          {pageNumber}
        </li>
      ))}

      <li
        className={cn([styles.pageItem], { [styles.disabled]: currentPage === totalPages })}
        onClick={handleNext}
      >
        »
      </li>
    </ul>
  );
};