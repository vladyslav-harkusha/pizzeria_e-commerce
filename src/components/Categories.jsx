import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setCategoryId } from '../redux/slices/filterSlice';
import { pizzaCategories } from '../constants/pizzaCategories';

export const Categories = () => {
  const dispatch = useDispatch();
  const categoryIndex = useSelector(state => state.filterSlice.categoryId);
  
  const updateCategoryIndex = (index) => dispatch(setCategoryId(index));

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
