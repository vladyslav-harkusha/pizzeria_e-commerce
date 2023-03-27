import React, { useState, useEffect, useContext } from 'react';

import { Categories } from '../components/Categories';
import { PizzaBlock } from '../components/PizzaBlock';
import { PizzaBlockSkeleton } from '../components/PizzaBlock/Skeleton';
import { Sort } from '../components/Sort';

import { pizzaCategories } from '../constants/pizzaCategories';
import { pizzaSortType } from '../constants/pizzaSortType';
import { SearchValueContext } from '../context/searchValueContext';

const getQueryParams = (catInd, sortInd, searchValue) => {
  let params = '';
  if (catInd) {
    params += `&category=${catInd}`;
  }
  if (sortInd) {
    params += `&sortBy=${pizzaSortType[sortInd]}`;
  }
  if (searchValue) {
    params += `&search=${searchValue}`;
  }
  return params;
};

export const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [sortByIndex, setSortByIndex] = useState(0);
  const { searchValue } = useContext(SearchValueContext)

  const BASE_URL = `https://641c394db556e431a868cc43.mockapi.io/pizzas?`;
  const queryParams = getQueryParams(categoryIndex, sortByIndex, searchValue);

  const getAllPizzas = async () => {
    setIsLoading(true);
    const response = await fetch(BASE_URL + queryParams);
    const pizzasFromServer = await response.json();

    setPizzas(pizzasFromServer);
    setIsLoading(false);
  };

  useEffect(() => {
    getAllPizzas();
    window.scrollTo(0, 0);
  }, [categoryIndex, sortByIndex, searchValue]);

  const updateCategoryIndex = (index) => setCategoryIndex(index);
  const updateSortIndex = (index) => setSortByIndex(index);

  return (
    <div className="container">
      <div className="content__top">
        <Categories categoryIndex={categoryIndex} updateCategoryIndex={updateCategoryIndex} />
        <Sort sortByIndex={sortByIndex} updateSortIndex={updateSortIndex} />
      </div>

      <h2 className="content__title">{`${pizzaCategories[categoryIndex]} pizzas`}</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(10)].map((_, i) => <PizzaBlockSkeleton key={i} />)
          : pizzas.map(pizza => <PizzaBlock key={pizza.id} pizza={pizza} />)
        }
      </div>
    </div>
  );
};