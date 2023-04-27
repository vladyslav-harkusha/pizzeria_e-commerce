import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import { Categories } from '../components/Categories';
import { PizzaBlock } from '../components/PizzaBlock';
import { PizzaBlockSkeleton } from '../components/PizzaBlock/Skeleton';
import { Sort } from '../components/Sort';
import { Pagination } from '../components/Pagination/Pagination';

import { pizzaCategories } from '../constants/pizzaCategories';
import { pizzaSortType } from '../constants/pizzaSortType';
import { SearchValueContext } from '../context/searchValueContext';
import { setCurrentPage } from '../redux/slices/filterSlice';

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

  const dispatch = useDispatch();
  const { categoryId, sortByIndex, currentPage } = useSelector(state => state.filterSlice);
  const { searchValue } = useContext(SearchValueContext);

  const BASE_URL = `https://641c394db556e431a868cc43.mockapi.io/pizzas?`;
  const queryParams = getQueryParams(categoryId, sortByIndex, searchValue);

  const getAllPizzas = async () => {
    setIsLoading(true);
    const response = await axios.get(BASE_URL + queryParams);

    setPizzas(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getAllPizzas();
    window.scrollTo(0, 0);
  }, [categoryId, sortByIndex, searchValue, currentPage]);

  const onChangePage = (newPage) => {
    dispatch(setCurrentPage(newPage))
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>

      <h2 className="content__title">{`${pizzaCategories[categoryId]} pizzas`}</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(10)].map((_, i) => <PizzaBlockSkeleton key={i} />)
          : pizzas.map(pizza => <PizzaBlock key={pizza.id} pizza={pizza} />)
        }
      </div>

      <Pagination
        totalItems={10}
        perPage={8}
        currentPage={currentPage}
        onChangePage={onChangePage}
      />
    </div>
  );
};
