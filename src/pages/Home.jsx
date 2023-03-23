import React, { useState, useEffect } from 'react';

import { Categories } from '../components/Categories';
import { PizzaBlock } from '../components/PizzaBlock';
import { PizzaBlockSkeleton } from '../components/PizzaBlock/Skeleton';
import { Sort } from '../components/Sort';

export const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAllPizzas = async () => {
    const response = await fetch('https://641c394db556e431a868cc43.mockapi.io/pizzas');

    const pizzasFromServer = await response.json();

    setTimeout(() => {
      setPizzas(pizzasFromServer);
      setIsLoading(false);
    }, 700)
  };

  useEffect(() => {
    getAllPizzas();
  }, [])

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>

      <h2 className="content__title">All pizzas</h2>

      <div className="content__items">
        {isLoading
          ? [...new Array(10)].map((_, i) => <PizzaBlockSkeleton key={i} />)
          : pizzas.map(pizza => <PizzaBlock key={pizza.id} pizza={pizza} />)
        }
      </div>
    </>
  );
};
