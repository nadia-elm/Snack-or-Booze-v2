import './App.css';

import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { NavBar } from './components/NavBar';
import { FoodMenu } from './components/FoodMenu';
import { DrinkMenu } from './components/DrinkMenu';
import { ItemInfo } from './components/ItemInfo';
import { NotFound } from './components/NotFound';
import SnackOrBoozeApi from './Api';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);

  useEffect(() => {
    const getSnacks = async () => {
      let snacks = await SnackOrBoozeApi.getSnacks();
      setSnacks(snacks);
      setIsLoading(false);
    };
    getSnacks();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route exact path='/' element={<Home />}></Route>

          <Route
            exact
            path='/snacks'
            element={<FoodMenu snacks={snacks} title='Snacks' />}
          ></Route>

          <Route path='/:type/:id' element={<ItemInfo />}></Route>
          <Route exact path='/drinks' element={<DrinkMenu />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
