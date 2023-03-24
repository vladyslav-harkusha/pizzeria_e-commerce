import React from 'react';

import { pizzaCategories } from '../constants/pizzaCategories';

export const Categories = ({ categoryIndex, updateCategoryIndex }) => {
  const changeCategoryHandler = (newIndex) => {
    if (newIndex === categoryIndex) {
      return;
    }
    updateCategoryIndex(newIndex);
  };

  return (
    <div className="categories">
      <ul>
        {pizzaCategories.map((category, i) => (
          <li
            key={i}
            className={i === categoryIndex ? 'active' : ''}
            onClick={() => changeCategoryHandler(i)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};
