import React, { useEffect, useState } from 'react';

import { Categories } from './components/Categories';
import { Header } from './components/Header';
import { PizzaBlock } from './components/PizzaBlock';
import { Sort } from './components/Sort';

import './scss/app.scss';

function App() {
  const [pizzas, setPizzas] = useState([]);

  const getAllPizzas = async() => {
    const response = await fetch('https://641c394db556e431a868cc43.mockapi.io/pizzas');

    const pizzasFromServer = await response.json();

    setPizzas(pizzasFromServer);
  };

  useEffect(() => {
    getAllPizzas();
  }, [])

  return (
    <div className="wrapper">
      <Header />

      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>

          <h2 className="content__title">All pizzas</h2>

          <div className="content__items">
            {pizzas.map(pizza => (
              <PizzaBlock key={pizza.id} pizza={pizza} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
