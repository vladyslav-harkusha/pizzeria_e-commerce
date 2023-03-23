import React, { useState } from 'react';

const categories = ['All', 'Meat', 'Vegetarian', 'Grilled', 'Spicy', 'Closed'];

export const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const changeCategoryHandler = (newIndex) => {
    if (newIndex === activeIndex) {
      return;
    }
    setActiveIndex(newIndex);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((category, i) => (
          <li
            key={i}
            className={i === activeIndex ? 'active' : ''}
            onClick={() => changeCategoryHandler(i)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};
