import React, { useEffect, useState } from 'react';
import { MenuItem } from './MenuItem';
import SnackOrBoozeApi from '../Api';
import styled from 'styled-components';
import AddItem from './AddItem';

export const DrinkMenu = () => {
  const [DrinkList, setDrinkList] = useState([]);
  useEffect(() => {
    async function fetchDrinks() {
      try {
        const res = await SnackOrBoozeApi.getDrinks();
        setDrinkList(res.drinks);
        // console.log(res.drinks);
      } catch (error) {
        console.error('Error fetching drinks', error);
      }
    }
    fetchDrinks();
  }, []);
  return (
    <Wrapper>
      {DrinkList.map((item) => {
        return (
          <div key={item.id}>
            <MenuItem {...item} type='drinks' />
          </div>
        );
      })}
      <AddItem type='drinks' />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 90vw;
  padding: 2rem 0 0 2rem;
`;
